import styled from "styled-components";

const Wrapper = styled.div`
  button {
    border-color: transparent;
    background: var(--highlightColor);
    border-radius: var(--borderRadius);
  }
  .icon-btn {
    font-size: 2rem;
    color: var(--headlineColor);
    cursor: pointer;
    padding: 0.1rem 0.1rem;
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
`;

export default Wrapper;
