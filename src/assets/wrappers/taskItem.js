import styled from "styled-components";

const Wrapper = styled.div`
  .task-item {
    border: 1px solid var(--highlightColor);
    width: max-content;
    border-radius: var(--borderRadius);
    color: var(--textColor);
    position: relative;
    padding: 0.55rem;
    margin: 1.25rem;
  }
  text-area {
    background-color: var(--backgroundColor);
    border-color: transparent;
    outline: none;
  }
  .btn-container {
    position: absolute;
    top: -25px;
    right: 15px;
    left: 15px;
    display: flex;
    justify-content: space-between;
  }
  button {
    border: transparent;
    background: transparent;
    color: var(--headline-color);
    cursor: pointer;
  }
`;

export default Wrapper;
