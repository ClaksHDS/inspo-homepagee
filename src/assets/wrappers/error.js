import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--headlineColor);
    text-transform: capitalize;
  }
  p {
    margin-top: 0;
    margin-bottom: 2rem;
    color: var(--textColor);
  }
`;

export default Wrapper;
