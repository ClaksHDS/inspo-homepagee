import styled from "styled-components";

const Wrapper = styled.footer`
  height: 10vh;
  display: grid;
  padding-top: 1rem;
  padding-bottom: 0;
  place-items: center;
  margin: 0 auto;
  background: var(--backgroundColor);
  .icons-container ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    transition: var(--transition);
    a {
      color: var(--headlineColor);
      padding: 0 0.5rem;
      font-size: 1.75rem;
    }
    a:hover {
      color: var(--textColor);
    }
  }
  .copyright {
    display: grid;
    place-items: center;
  }
`;

export default Wrapper;
