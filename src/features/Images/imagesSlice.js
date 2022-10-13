import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const clientID = `?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;
// to fetch the images from the Unsplash API
const getImages = createAsyncThunk("images/getImages", async () => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/${clientID}`
  );
  return response.data;
});

const initialState = {
  images: [
    {
      id: "",
      src: "",
    },
  ],
  imageIndex: 0,
  isLoading: false,
  hasFailed: false,
};

const imagesSlice = createSlice({
  name: "images",
  initialState: initialState,
  reducers: {
    nextBackground: (state) => {
      const maxIndex = state.images.length - 1;
      if (state.imageIndex === maxIndex) {
        state.imageIndex = 1;
      } else {
        state.imageIndex += 1;
      }
    },
    prevBackground: (state) => {
      const maxIndex = state.images.length - 1;
      if (state.imageIndex === 1) {
        state.imageIndex = maxIndex;
      } else {
        state.imageIndex -= 1;
      }
    },
  },

  extraReducers: {
    [getImages.pending]: (state) => {
      state.isLoading = true;
      state.hasFailed = false;
    },
    [getImages.fulfilled]: (state, action) => {
      action.payload.forEach((image) => {
        const background = {
          id: image.id,
          src: image.urls.raw,
        };
        state.images.push(background);
      });
      state.isLoading = false;
      state.imageIndex = 1;
      state.hasFailed = false;
    },
    [getImages.rejected]: (state) => {
      state.isLoading = false;
      state.hasFailed = true;
    },
  },
});

export const { nextBackground, prevBackground } = imagesSlice.actions;
export { getImages };
export default imagesSlice.reducer;
