import styled from "styled-components";

const Wrapper = styled.div`
  button {
    border-color: transparent;
    background: var(--highlightColor);
    border-radius: var(--borderRadius);
  }
  .icon-btn {
    font-size: 3rem;
    color: var(--headlineColor);
    cursor: pointer;
    padding: 0.25rem 0.15rem;
  }
  .prev-btn {
    margin-left: 0.55rem;
    position: absolute;
    top: 60vh;
    left: 0;
  }
  .next-btn {
    margin-right: 0.55rem;
    position: absolute;
    top: 60vh;
    right: 0;
  }
`;

export default Wrapper;
