import styled from "styled-components";

const Wrapper = styled.div`
  max-width: var(--maxWidth);
  display: flex;
  margin: 2rem auto;
  align-items: center;
  .quote-details {
    background: var(--backgroundColor);
    border-radius: var(--borderRadius);
    margin: 1rem 2rem;
    padding: 1rem 1rem;
    color: var(--textColor);
    span {
      font-style: italic;
    }
    a {
      background: var(--highlightColor);
      color: var(--headlineColor);
      padding: 0.55rem;
      border-radius: var(--borderRadius);
      text-align: center;
    }
  }
`;

export default Wrapper;
