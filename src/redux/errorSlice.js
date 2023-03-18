import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  value: "No errors",
}

function test() {
  return "test";
}

async function getErrorsApi() {
  try {
    let errors = await axios.get('/api/getErrors');
    //const errors = "Test";
    return errors;
  } catch (err) {
    console.log(`Error calling API to get dogs from database: ${err}`);
    alert('Error calling API to get dogs from database. Check console.');
    return null;
  }
}

export const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    getErrors: (state, action) => {

      const errors = getErrorsApi();
      console.log(errors);

      // let x = test();
      // console.log("Hello from getErrors: " + x);

      // state.value = action.payload
    },
  },
});

export const { getErrors } = errorSlice.actions;

export default errorSlice.reducer;