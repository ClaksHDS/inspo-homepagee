import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--backgroundColor);
  border-radius: var(--borderRadius);
  margin: 1rem;
  max-width: 15rem;
  text-align: center;
  padding: 1rem 1rem;
  h4 {
    margin-top: 0;
    padding-top: 2rem;
  }
  h3 {
    margin-top: 0;
  }
  p {
    text-transform: capitalize;
  }
  .details {
    display: grid;
    place-items: center;
    background: var(--highlightColor);
    border-radius: var(--borderRadius);
    padding: 0 0;
    margin: 0 1rem;
    p {
      margin: 0;
      padding-bottom: 1rem;
    }
  }
  .weather-icon {
    font-size: 1rem;
    margin: 0;
  }
  .temp-info {
    display: flex;
    justify-content: space-around;
  }
`;

export default Wrapper;
