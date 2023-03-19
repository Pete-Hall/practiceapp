import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import errorSlice from "./errorSlice";

export const store = configureStore({
  reducer: {
    // errors: errorSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});