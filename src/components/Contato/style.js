import styled from 'styled-components'

export const StyleContato = styled.div`
  font-size: 16px;
  padding-top: 100px;
  margin: 0 10%;

  p {
    margin-bottom: 20px;
  }
  .text {
    color: var(--base-color);
    margin-bottom: 20px;
  }
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--base-color);
    border-radius: 0px;
    background-color: white;

    -webkit-appearance: none;
  }
  select {
    color: black;
    background-image: linear-gradient(
        45deg,
        transparent 50%,
        var(--base-color) 50%
      ),
      linear-gradient(135deg, var(--base-color) 50%, transparent 50%),
      linear-gradient(to right, white, white);
    background-position: calc(100% - 22px) calc(1em + 1px),
      calc(100% - 15px) calc(1em + 1px), 100% 0;
    background-size: 7px 7px, 7px 7px;
    background-repeat: no-repeat;
  }
  #box {
    border-radius: none;
  }
  .contact-email {
    display: flex;
  }
  .contact-email input {
    font-family: 'Poppins', sans-serif;
    margin: 20px 0;
    display: block;
    padding: 10px;
    width: 300px;
    border-radius: 0;
    border: 1px solid var(--base-color);
  }
  .contact-email textarea {
    font-family: 'Poppins', sans-serif;
    display: block;
    margin-top: 20px;
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid var(--base-color);
  }
  .contact-email button {
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
  .contact-email button:hover {
    font-size: 18px;
    width: 225px;
  }
  span {
    font-weight: 600;
    color: var(--base-color);
  }
  #contato {
    text-align: justify;
  }
  #contato .contact-email {
    text-align: center;
  }
  #contato form {
    margin: auto;
  }
  //

  //
  @media (min-width: 767px) {
    #contato {
      display: block;
      text-align: justify;
    }

    #contato button {
      color: white;
    }
  }
`
