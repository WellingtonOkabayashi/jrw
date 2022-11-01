import styled from 'styled-components'

export const Nav = styled.div`
  .hamb_open,
  .hamb_close {
    display: none;
  }
  .header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 3;
    background: white;
    width: 100%;
    justify-content: space-between;
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
  }

  .header-align {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;

    margin: 0 10%;
  }
  .navigation-menu {
    height: 70px;
    margin: 0 auto;
  }
  .navigation-menu ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navigation-menu a {
    text-decoration: none;
    color: var(--black);
    font-weight: 650;
    font-size: 16px;
  }
  .navigation-menu li {
    position: relative;
    margin-left: 15px;
  }
  nav ul li a:hover {
    color: var(--base-color);
  }
  nav ul li a::after,
  .link.ativo a::after {
    content: '';
    width: 0%;
    height: 2px;
    background: var(--base-color);
    position: absolute;
    left: 0;
    bottom: -1rem;

    transition: 0.3s;
  }
  nav ul li a:hover::after,
  .link.ativo a::after {
    width: 100%;
  }

  .logo {
    font-size: 20px;
    font-weight: 800;
    display: flex;
    align-items: center;
  }
  span {
    font-weight: 800;
    color: var(--base-color);
  }
  .link .logomenu {
    font-weight: 800;
  }
  @media (max-width: 1024px) {
    .header-align ul {
      display: none;
      transition: 2s;
    }
    .navigation-menu {
      background-color: white;
    }
    .hamb_close {
      display: none;
    }
    .hamb_open {
      display: block;
      font-size: 24px;
      color: var(--base-color);
      display: flex;
      justify-content: center;
      align-items: center;
      right: 9%;
      cursor: pointer;
      transition: ease 0.3s;
    }
    .hamb_close {
      font-size: 24px;
      color: var(--base-color);
      position: absolute;
      right: 9%;
      cursor: pointer;
      transition: ease 0.3s;
    }
    .active .hamb_open {
      display: none;
    }
    .active .hamb_close {
      display: block;
      position: absolute;
      top: 20px;
      right: 10%;
    }
    .active li {
      margin: 0;
      margin-top: 20px;
    }

    .active a {
      font-size: 25px;
    }
    .navigation-menu {
      position: fixed;
      width: 100%;
      height: 70px;
      box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
      transition: 0.5s;
    }
    .navigation-menu.active {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: var(--base-color-second);
      transition: 0.5s;
    }

    .navigation-menu.active ul {
      display: block;
      display: flex;
      flex-direction: column;
      font-size: 30px;
    }

    .active .header-align {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active li {
      padding: 10px;
    }
    .active .logo {
      display: none;
    }
  }
`
