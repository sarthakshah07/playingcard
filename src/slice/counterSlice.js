import { createSlice } from "@reduxjs/toolkit";
import { data } from "../mock-data/card";

const initialState = {
  cardsData: data,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    showLoader: (state, { payload }) => ({
      ...state,
    }),
  },
});

export const { showLoader } = counterSlice.actions;
export const counterSelector = (state) => state?.Counter;
export default counterSlice.reducer;
