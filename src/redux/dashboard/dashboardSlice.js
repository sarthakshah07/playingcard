import { createSlice } from "@reduxjs/toolkit"
import {
  fetchCardAction
} from "./middleware"

const INITIAL_STATE = {
  cardsData: [],
}

const authSlice = createSlice({
  name: "Dashboard",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCardAction.fulfilled, (state, { payload }) => ({
      ...state,
      cardsData: payload
    })) 
  },
})

export const dashboardSelector = (state) => state?.Dashboard

export default authSlice.reducer