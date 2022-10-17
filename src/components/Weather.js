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
      <div>
        <h4>{city}</h4>
        <h3 className='temperature'>{Math.round(temperature)}°</h3>
        <div className='details'>
          <img
            src={` http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt='weather icon'
            className='weather-icon'
          />
          <p>{description}</p>
        </div>

        <div className='temp-info'>
          <p>Min. {Math.round(tempMin)}°</p>
          <p>Max. {Math.round(tempMax)}°</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Weather;
