import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "No errors",
}

export const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    getErrors: (state, action) => {
      // do old school redux/saga type code here to call axios, get response, and update state.value???
      let x = "x";
      console.log("Hello from getErrors: " + x);
      // state.value = action.payload
    },
  },
});

export const { getErrors } = errorSlice.actions;

export default errorSlice.reducer;