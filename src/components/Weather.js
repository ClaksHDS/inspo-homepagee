import React, { useEffect } from "react";
import {
  getWeather,
  setCoordinates,
  setError,
  selectWeather,
} from "../features/weather/weatherSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
/* Styles */
import Wrapper from "../assets/wrappers/weather";

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);

  // ask authorization to locate the user & get his/her coordinates
  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(
            setCoordinates({ latitude: latitude, longitude: longitude })
          );
        },
        (error) => {
          console.log(` Error error.code - error.message`);
          dispatch(setError());
        }
      );
    }
  }, []);

  // dispatch the call to the weather api only if we get back the user's coordinates
  useEffect(() => {
    if (weather.lat && weather.lon)
      dispatch(getWeather({ lat: weather.lat, lon: weather.lon }));
  }, [dispatch, weather.lat, weather.lon]);

  if (weather.hasError) {
    return (
      <div>
        Failed to access your location, check your authorization to see the
        weather.
      </div>
    );
  } else if (weather.isLoading) {
    return <Loading />;
  } else {
    return (
      <Wrapper>
        <header className='weather-header'>
          <img
            src={` http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt='weather icon'
            className='weather-icon'
          />
          <h5>{weather.city}</h5>
          <h4 className='temperature'>{Math.round(weather.temperature)}°</h4>
        </header>
        <div className='details'>
          <p>{weather.description}.</p>
          <p>Min. {Math.round(weather.tempMin)}°</p>
          <p>Max. {Math.round(weather.tempMax)}°</p>
        </div>
      </Wrapper>
    );
  }
};

export default Weather;
