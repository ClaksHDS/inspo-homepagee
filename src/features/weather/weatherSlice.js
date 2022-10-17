import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { queryByRole } from "@testing-library/react";
import axios from "axios";
import { json } from "react-router-dom";
const openWeatherapiKey = `${process.env.REACT_APP_OPENWEATHER_KEY}`;
const geopifyAPIkey = `${process.env.REACT_APP_GEOPIFY_KEY}`;

// fetch the coordinates to get the weather after
const getCoordinates = createAsyncThunk("weather/getCoordinates", async () => {
  const response = await fetch(
    `https://api.geoapify.com/v1/ipinfo?apiKey=${geopifyAPIkey}
`
  );
  const json = response.json();
  return json;
});

// to fetch the weather from OpenWeather api
const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (coordinates) => {
    const { lat, lon } = coordinates;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${openWeatherapiKey}`
    );
    const json = response.json();
    return json;
  }
);

const initialState = {
  isLoading: false,
  hasFailed: false,
  lat: "",
  lon: "",
  icon: "",
  description: "",
  temperature: "",
  tempMin: "",
  tempMax: "",
  city: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,

  extraReducers: {
    [getWeather.pending]: (state) => {
      state.isLoading = true;
      state.hasFailed = false;
    },
    [getWeather.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasFailed = false;
      state.icon = action.payload.weather[0].icon;
      state.description = action.payload.weather[0].description;
      state.tempMin = action.payload.main.temp_min;
      state.tempMax = action.payload.main.temp_max;
      state.temperature = action.payload.main.temp;
      state.city = action.payload.name;
    },
    [getWeather.rejected]: (state) => {
      state.isLoading = false;
      state.hasFailed = true;
    },
    // handle coordinates
    [getCoordinates.pending]: (state) => {
      state.isLoading = true;
      state.hasFailed = false;
    },
    [getCoordinates.fulfilled]: (state, action) => {
      state.lat = action.payload.location.latitude;
      state.lon = action.payload.location.longitude;
      state.isLoading = false;
      state.hasFailed = false;
    },
    [getCoordinates.rejected]: (state) => {
      state.isLoading = true;
      state.hasFailed = false;
    },
  },
});

export { getWeather, getCoordinates };
export default weatherSlice.reducer;
