import { createSlice } from "@reduxjs/toolkit";
//creating redux state slice
export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

//export action creators
export const { increment, incrementByAmount, decrement, decrementByAmount } =
  counterSlice.actions;

//export reducers as a while slice

export default counterSlice.reducer;
