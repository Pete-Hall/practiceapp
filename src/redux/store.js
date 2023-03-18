import { configureStore } from "@reduxjs/toolkit";
import errorSlice from "./errorSlice";

export const store = configureStore({
  reducer: {
    error: errorSlice
  },
});