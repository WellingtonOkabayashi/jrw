import styled from 'styled-components'

export const SectionService = styled.div`
  font-size: 16px;
  padding-top: 80px;
  margin: 0 10%;
  .divider {
    margin: 0 10%;
    border-top: 1px solid var(--base-color-second);
    margin: 100px 0 100px;
  }
  .title {
    padding-bottom: 20px;
  }
  span {
    font-weight: 800;
    color: var(--base-color);
  }

  section {
    display: grid;
    justify-content: space-between;
  }
  section a {
    margin: 0 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
  }
  a {
    text-decoration: none;
    color: black;
  }
  #content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p {
    text-align: justify;
  }
  .imagem {
    width: 350px;
    margin: 60px 0 60px;
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
  .jwrlab,
  .jwrdev,
  .jwrtranslate {
    display: flex;
    align-items: center;
    gap: 80px;
    flex-direction: column;
  }

  @media (min-width: 1025px) {
    .title,
    .jwrlab,
    .jwrdev,
    .jwrtranslate {
      display: flex;
      justify-content: space-between;
      width: 100%;
      flex-direction: row;
      gap: 100px;
      margin: 0 auto;
    }
    p {
      font-size: 18px;
      width: 400px;
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
    #content {
      display: flex;
      flex-direction: column;
    }
    .jwrlab,
    .jwrdev,
    .jwrtranslate {
      display: flex;
      flex-direction: column;
    }
  }
`
