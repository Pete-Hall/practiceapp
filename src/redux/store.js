import { configureStore } from "@reduxjs/toolkit";
import descriptionSlice from "./descriptionSlice";

export const store = configureStore({
  reducer: {
    description: descriptionSlice
    // flag reducer
    // delete reducer
    // comments reducer
  }
});