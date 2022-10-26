import styled from "styled-components";

const Wrapper = styled.div`
  .task-item {
    border: 1px solid var(--highlightColor);
    width: max-content;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    color: var(--textColor);
    position: relative;
    padding: 0.55rem;
    margin: 1.2rem;
    display: flex;
    flex-direction: column;
  }
  .task {
    border: none;
    background-color: transparent;
    overflow: auto;
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
    color: var(--headlineColor);
    cursor: pointer;
  }
`;

export default Wrapper;
