import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--backgroundColor);
  border-radius: var(--borderRadius);
  width: 220px;
  height: 90px;
  display: grid;
  place-items: center;
  box-shadow: var(--shadow-2);
  .weather-header {
    display: flex;
    gap: 0.5rem;
    place-items: center;

    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      background-color: var(--highlightColor);
    }
    h5,
    h4 {
      font-size: var(--smallText);
    }
    h4 {
      font-weight: bold;
    }
  }
  .details {
    display: none;
  }
  @media (min-width: 990px) {
    width: 350px;
    height: 150px;
    display: grid;
    place-items: center;
    .weather-header {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      padding-top: 1rem;
      h4,
      h5 {
        font-size: 1.1rem;
      }
      img {
        height: 80px;
        width: 80px;
      }
    }
    .details {
      display: flex;
      margin: 0 auto;
      text-transform: capitalize;
      gap: 0.5rem;
    }
  }
`;

export default Wrapper;
