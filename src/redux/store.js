import { configureStore } from "@reduxjs/toolkit";
import images from "./slices/images";

const store = configureStore({
  reducer: { images },
  devTools: true,
});

export default store;
