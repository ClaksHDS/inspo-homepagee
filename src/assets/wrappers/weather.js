import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--backgroundColor);
  border-radius: var(--borderRadius);
  width: 350px;
  height: 150px;
  text-align: center;
  display: grid;
  place-items: center;
  gap: 0;
  margin: 0 0;
  padding: 0 0;
  .weather-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.9rem;
    padding-top: 0;
    img {
      height: 70px;
      width: 70px;
    }
  }
  .details {
    display: flex;
    place-items: center;
    text-transform: capitalize;
    text-align: center;
    gap: 0.5rem;
    margin: 0;
  }
  .temp-details {
    display: flex;
    place-items: center;
    gap: 0.5rem;
  }
`;

export default Wrapper;
