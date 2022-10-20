import React, { useEffect } from "react";
import { getWeather, getCoordinates } from "../features/weather/weatherSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
/* Styles */
import Wrapper from "../assets/wrappers/weather";

const Weather = () => {
  const dispatch = useDispatch();
  const {
    lat,
    lon,
    isLoading,
    description,
    temperature,
    icon,
    tempMin,
    tempMax,
    city,
  } = useSelector((store) => store.weather);

  useEffect(() => {
    dispatch(getCoordinates());
    dispatch(getWeather({ lat, lon }));
  }, [dispatch, lat, lon]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <header className='weather-header'>
        <img
          src={` http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt='weather icon'
          className='weather-icon'
        />
        <h5>{city}</h5>
        <h4 className='temperature'>{Math.round(temperature)}°</h4>
      </header>
      <div className='details'>
        <p>{description}.</p>
      </div>
      <div className='temp-details'>
        <p>Min. {Math.round(tempMin)}° -</p>
        <p>Max. {Math.round(tempMax)}°</p>
      </div>
    </Wrapper>
  );
};

export default Weather;
