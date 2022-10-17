import React, { useEffect } from "react";
import { getWeather, getCoordinates } from "../features/weather/weatherSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import styled from "styled-components";

const Weather = () => {
  const dispatch = useDispatch();
  const { lat, lon, isLoading, description, temperature, icon } = useSelector(
    (store) => store.weather
  );

  useEffect(() => {
    dispatch(getCoordinates());
    dispatch(getWeather({ lat, lon }));
  }, [dispatch, lat, lon]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div>
        <button
          type='button'
          //onClick={getLocation}
          title='allow to get the weather'
        >
          allow location
        </button>
        <p>{lon}</p>
        <p>{lat}</p>
      </div>
    </Wrapper>
  );
};

export default Weather;

const Wrapper = styled.div`
  background: var(--backgroundColor);
  border-radius: var(--borderRadius);
  margin: 1rem;
  max-width: 12rem;
  text-align: center;
  button {
    border-color: transparent;
    background: var(--highlightColor);
    border-radius: var(--borderRadius);
  }
  button:hover {
    background: #fcc66b;
  }
`;
