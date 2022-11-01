import styled from 'styled-components'

export const SectionTranslate = styled.div`
  font-size: 16px;
  padding-top: 100px;
  margin: 0 10%;
  span {
    font-weight: 800;
  }
  section {
    display: grid;
  }
  section a {
    font-weight: 800;
    cursor: pointer;
    margin: 0 5px;
    display: inline;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  #content {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 50px;
  }
  #content p {
    width: 100%;
    padding-top: 10px;
    text-align: justify;
  }

  #span {
    color: var(--base-color);
  }
  .imagem {
    width: 350px;
    margin: 90px 0 0px;
    position: relative;
  }
  img {
    width: 100%;
  }
  .imagem::before {
    content: '';
    position: absolute;

    left: 30px;
    width: 290px;
    height: 290px;
    z-index: -3;
    top: -20px;
    opacity: 15%;
    background-color: var(--base-color);

    transform: rotate(225deg);
  }
  button {
    width: 200px;

    padding: 10px;

    background: var(--base-color);
    border: 1px solid var(--base-color);
    border-radius: 10px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    transition: 0.8s;
  }
  button:hover {
    font-size: 18px;
    width: 225px;
  }
  button a {
    color: white;
  }
  @media (min-width: 1000px) {
    section #content {
      width: 100%;
    }

    #content {
      padding-top: 80px;
      display: grid;
      grid-auto-flow: column;
      gap: 20px;
      justify-content: space-between;
      justify-items: center;
      align-content: center;

      padding-bottom: 10px;
    }
    p {
      max-width: 400px;
      grid-area: 1;
    }
    .imagem {
      margin: 0;
      grid-area: 1;
    }
    button {
      grid-area: 2;
    }
  }
`
