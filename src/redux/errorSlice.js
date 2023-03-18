import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "No errors",
}

function test() {
  return "test";
}

export const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    getErrors: (state, action) => {

      let x = test();
      console.log("Hello from getErrors: " + x);

      // state.value = action.payload
    },
  },
});

export const { getErrors } = errorSlice.actions;

export default errorSlice.reducer;