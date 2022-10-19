import styled from "styled-components";

const Wrapper = styled.div`
  .tasks-list {
    background: var(--backgroundColor);
    border-radius: var(--borderRadius);
    width: 90vw;
    max-width: var(--fixedWidth);
    box-shadow: var(--shadow-2);
    padding: 2rem 2rem;
    margin: 3rem auto;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
  }
`;

export default Wrapper;
