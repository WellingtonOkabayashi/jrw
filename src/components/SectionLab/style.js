import styled from 'styled-components'

export const SectionLab = styled.div`
  font-size: 16px;
  padding: 100px 0;
  margin: 0 10%;
  .container {
    text-align: center;
  }
  span {
    font-weight: 800;
  }
  section {
    display: grid;
  }
  section h5 {
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
    padding-top: 30px;
    text-align: justify;
  }

  #span {
    color: var(--base-color);
  }
  .imagem {
    width: 350px;

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
  .button {
    width: 200px;

    padding: 10px;
    margin-top: 20px;
    background: var(--base-color);
    border: 1px solid var(--base-color);
    border-radius: 10px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    transition: 0.8s;
    margin-bottom: 30px;
  }
  .button:hover {
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
      display: grid;
      grid-auto-flow: column;
      gap: 20px;
      justify-content: space-between;
      justify-items: center;
      margin: 0;
      padding: 0;
    }
    p {
      max-width: 400px;

      grid-area: 1;
    }
    .imagem {
      grid-area: 1;
    }
    button {
      grid-area: 2;
    }
  }
`
