import styled from 'styled-components'

export const SectionDev = styled.div`
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
  .certificates {
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    gap: 30px;
    margin: 30px 0;
    justify-items: center;
  }
  .certificates img {
    cursor: pointer;
    width: 100%;
    border: 2px solid var(--base-color);
    max-width: 350px;
  }
  #span {
    color: var(--base-color);
  }
  .imagem {
    width: 350px;
    margin: 70px 0 0px;
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
  .btn {
    justify-self: center;
    margin-top: 20px;
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
  .btn:hover {
    font-size: 18px;
    width: 225px;
  }
  button a {
    color: white;
  }
  #sobre {
    width: 100%;
    display: grid;
    justify-items: center;
  }
  #sobre h5 {
    padding-top: 60px;
    text-align: center;
    font-size: 24px;
  }
  #sobre p {
    margin-top: 10px;
    width: 100%;
    text-align: justify;
  }

  #sobremin h5 {
    display: flex;
    justify-content: center;
  }
  #cards {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    justify-content: center;
    margin: 30px 0;
  }
  #cards p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .box {
    text-align: center;
    padding: 0 10px;
    font-size: 50px;
    color: var(--base-color);
  }
  .box p {
    color: black;
    font-size: 12px;
    font-weight: 800;
    text-align: center;
  }
  @media (min-width: 1000px) {
    .certificates {
      grid-auto-flow: column;
    }
    .certificates img {
      width: 100%;
    }
    #content {
      width: 100%;
      display: grid;
      grid-auto-flow: column;
    }
    #sobre {
      padding-top: 30px;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    #sobre p {
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: center;
    }
    #sobremin {
      width: 100%;
      border-right: 4px solid var(--base-color-second);
      border-left: 4px solid var(--base-color-second);
    }
    #sobremin h5 {
      display: flex;
      justify-content: center;
    }
    #cards {
      display: flex;
      justify-content: center;
    }
    #cards p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      font-size: 50px;
      color: var(--base-color);
    }
    .box p {
      color: var(--base-color);
      font-size: 12px;
      font-weight: 700;
    }
    #content {
      display: grid;
      grid-auto-flow: column;
      gap: 20px;
      justify-content: space-between;
      justify-items: center;
      margin: 0;
      padding: 0;
    }
    #content p {
      max-width: 400px;
      grid-area: 1;
    }
    .imagem {
      grid-area: 1;
    }
  }
  @media (min-width: 800px) {
    .certificates {
      grid-auto-flow: column;
    }
    .certificates img {
      width: 100%;
    }
    #sobremin {
      width: 100%;
      border-right: 4px solid var(--base-color-second);
      border-left: 4px solid var(--base-color-second);
    }
    #sobre p {
      width: 100%;
      padding: 0 10px;
    }
  }
`
