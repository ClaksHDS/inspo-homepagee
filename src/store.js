import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./features/Images/imagesSlice";
import weatherSlice from "./features/weather/weatherSlice";
import quoteSlice from "./features/randomFact/quoteSlice";
import taskSlice from "./features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    images: imagesSlice,
    weather: weatherSlice,
    quote: quoteSlice,
    task: taskSlice,
  },
});
