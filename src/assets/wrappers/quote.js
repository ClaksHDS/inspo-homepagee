import styled from "styled-components";

const Wrapper = styled.div`
  .modal {
    display: grid;
    place-items: center;
    position: absolute;
    border-radius: var(--borderRadius);
    bottom: 1rem;
    left: 5rem;
    right: 5rem;
    width: 80vw;
    background: var(--backgroundColor);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -10;
  }
  .show-modal {
    transform: translate(0);
    z-index: 999;
  }
  .quote-details {
    display: flex;
    width: 80vw;
    max-height: 100px;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    background: var(--backgroundColor);
    border-radius: var(--borderRadius);
    color: var(--textColor);
    gap: 2rem;
    overflow: scroll;
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
