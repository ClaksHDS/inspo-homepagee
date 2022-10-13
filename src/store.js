import { configureStore } from "@reduxjs/toolkit";

import imagesSlice from "./features/Images/imagesSlice";

export const store = configureStore({
  reducer: {
    images: imagesSlice,
  },
});
