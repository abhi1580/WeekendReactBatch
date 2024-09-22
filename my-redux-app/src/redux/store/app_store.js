import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter/counter_slice";

//create centralized redux store

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
