import styled from "styled-components";

const Wrapper = styled.div`
  .tasks-list {
    background: var(--backgroundColor);
    border-radius: var(--borderRadius);
    width: 80vw;
    max-height: 300px;
    max-width: 570px;
    box-shadow: var(--shadow-2);
    padding: 1rem 1rem;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    overflow: scroll;
  }
  @media (min-width: 990px) {
    max-height: 350px;
    max-width: 500px;
  }
`;

export default Wrapper;
