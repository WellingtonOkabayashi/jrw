import styled from 'styled-components'

export const SectionFooter = styled.div`
  margin: 0 10%;
  border-top: 1px solid var(--base-color-second);
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  span {
    font-weight: 800;
  }
  .footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0 10px;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .footer a {
    text-decoration: none;
    padding: 0 10px;
    color: var(--base-color);
    cursor: pointer;
  }

  .author {
    font-size: 11px;
    text-align: center;
    margin-bottom: 30px;
    color: var(--base-color);
    opacity: 80%;
  }
`
