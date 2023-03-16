import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../services/token";
import { loginUserByEmailAction, logoutUserAction } from "./middleware";

const INITIAL_STATE = {
  currentUser: undefined || getUser(),
};

const authSlice = createSlice({
  name: "Auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserByEmailAction.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: payload,
    }));
    builder.addCase(logoutUserAction.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: null,
    }));
  },
});

export const authSelector = (state) => state?.Auth;

export default authSlice.reducer;
