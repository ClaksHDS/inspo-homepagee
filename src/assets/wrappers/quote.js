import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  display: grid;
  place-items: center;
  // fix the quote at the bottom
  position: absolute;
  bottom: 0;
  left: 5rem;
  right: 5rem;
  .quote-details {
    display: flex;
    width: 80vw;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    background: var(--backgroundColor);
    border-radius: var(--borderRadius);
    color: var(--textColor);
    gap: 2rem;
    span {
      font-style: italic;
    }
    .quote-reference {
      background: var(--highlightColor);
      color: var(--headlineColor);
      padding: 0.55rem;
      border-radius: var(--borderRadius);
      font-size: var(--smallText);
      box-shadow: var(--shadow-2);
    }
    .quote-reference:hover {
      background: #fcc66b;
    }
  }
`;

export default Wrapper;
