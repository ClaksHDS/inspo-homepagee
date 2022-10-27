import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const openWeatherapiKey = `${process.env.REACT_APP_OPENWEATHER_KEY}`;

const getWeather = createAsyncThunk(
  "weather/getWeather",
  async ({ lat, lon }) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${openWeatherapiKey}`
    );
    const json = await response.json();
    const weatherData = {
      icon: json.weather[0].icon,
      description: json.weather[0].description,
      temperature: json.main.temp,
      tempMin: json.main.temp_min,
      tempMax: json.main.temp_max,
      city: json.name,
    };
    return weatherData;
  }
);

const initialState = {
  isLoading: true, // will ask for geolocation authorization before fetching the weather
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
  reducers: {
    setCoordinates: (state, action) => {
      const { latitude, longitude } = action.payload;
      state.lat = latitude;
      state.lon = longitude;
    },
    setError: (state) => {
      state.hasFailed = true;
    },
  },

  extraReducers: {
    // handle weather
    [getWeather.pending]: (state) => {
      state.isLoading = true;
      state.hasFailed = false;
    },
    [getWeather.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasFailed = false;
      state.description = action.payload.description;
      state.icon = action.payload.icon;
      state.temperature = action.payload.temperature;
      state.tempMin = action.payload.tempMin;
      state.tempMax = action.payload.tempMax;
      state.city = action.payload.city;
    },
    [getWeather.rejected]: (state) => {
      state.isLoading = false;
      state.hasFailed = true;
    },
  },
});

export const { setCoordinates, setError } = weatherSlice.actions;
export const selectWeather = (state) => state.weather;
export { getWeather };
export default weatherSlice.reducer;
