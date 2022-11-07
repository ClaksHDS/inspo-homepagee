import styled from "styled-components";

const Wrapper = styled.aside`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  button {
    background-color: var(--highlightColor);
    color: var(--headlineColor);
    padding: 1rem;
    border-radius: var(--borderRadius);
    border-color: transparent;
    box-shadow: var(--shadow-2);
    cursor: pointer;
    text-transform: capitalize;
  }
  button:hover {
    background: #fcc66b;
  }
`;

export default Wrapper;
