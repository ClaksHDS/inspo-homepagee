import styled from "styled-components";

const Wrapper = styled.div`
  .form {
    width: 90vw;
    max-width: var(--fixedWidth);
    background: var(--backgroundColor);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2rem;
    margin: 2rem auto;
    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      text-transform: capitalize;
      color: var(--headlineColor);
    }
    .form-input {
      width: 100%;
      padding: 0.375rem 0.75rem;
      border: 1.5px solid var(--highlightColor);
    }
    ::placeholder {
      font-family: inherit;
      color: var(--textColor);
    }
  }
`;

export default Wrapper;
