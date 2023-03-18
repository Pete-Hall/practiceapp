import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "No error description",
}

export const descriptionSlice = createSlice({
  name: 'description',
  initialState,
  reducers: {
    errorDescription: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { errorDescription } = descriptionSlice.actions;

export default descriptionSlice.reducer;