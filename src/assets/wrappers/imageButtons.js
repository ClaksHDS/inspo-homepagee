import styled from "styled-components";

const Wrapper = styled.div`
  button {
    border-color: transparent;
    background: var(--highlightColor);
    border-radius: var(--borderRadius);
    display: flex;
    place-items: center;
  }
  button:hover {
    background: #fcc66b;
  }
  .icon-btn {
    font-size: 1.55rem;
    color: var(--headlineColor);
    cursor: pointer;
  }
  .prev-btn {
    margin-left: 0.55rem;
    position: absolute;
    top: 65vh;
    left: 0;
  }
  .next-btn {
    margin-right: 0.55rem;
    position: absolute;
    top: 65vh;
    right: 0;
  }
  @media (min-width: 990px) {
    .icon-btn {
      font-size: 1.85rem;
      padding: 0.0155rem;
    }
  }
`;

export default Wrapper;
