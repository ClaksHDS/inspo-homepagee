import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const quoteApiKey = `${process.env.REACT_APP_QUOTE_KEY}`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": quoteApiKey,
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};
const getQuote = createAsyncThunk("quote/getQuote", async () => {
  const response = await fetch(
    "https://quotes15.p.rapidapi.com/quotes/random/",
    options
  );
  const json = await response.json();
  return json;
});

const initialState = {
  isLoading: false,
  hasFailed: false,
  quote: "",
  author: "",
};
const quoteSlice = createSlice({
  name: "quote",
  initialState,
  extraReducers: {
    [getQuote.pending]: (state) => {
      state.isLoading = true;
      state.hasFailed = false;
    },
    [getQuote.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasFailed = false;
      state.quote = action.payload.content;
      state.author = action.payload.originator.name;
    },
    [getQuote.rejected]: (state) => {
      state.isLoading = false;
      state.hasFailed = true;
    },
  },
});

export { getQuote };
export default quoteSlice.reducer;
