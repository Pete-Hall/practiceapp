import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "No error description",
}

export const descriptionSlice = createSlice({
  name: 'description',
  initialState,
  reducers: {
    getErrorDescription: (state, action) => {
      // do old school redux/saga type code here to call axios, get response, and update state.value???
      let x = "x";
      console.log("Hello from getErrorDescription: " + x);
      // state.value = action.payload
    },
  },
});

export const { getErrorDescription } = descriptionSlice.actions;

export default descriptionSlice.reducer;