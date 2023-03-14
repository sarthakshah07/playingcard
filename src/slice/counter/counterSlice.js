import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../mock-data/card";
import api from "../../users";
import api2 from "../../Apis/loginSuccessApi";

const initialState = {
  cardsData: data,
  products: [],
  logindata: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    showLoader: (state, { payload }) => ({
      ...state,
    }),
    productSuccess: (state, { payload }) => {
      state.products = payload;
    },
    loginSuccess: (state, { payload }) => {
      console.log("state", state);
      state.logindata = payload;
    },
  },
});

export const { showLoader, productSuccess, loginSuccess } =
  counterSlice.actions;

export const fetchUsers = (dispatch) => {
  try {
    api.get("/api/users?page=2").then((response) => {
      dispatch(productSuccess(response));
      console.log("response: ",response);
    });
  } catch (e) {
    return console.log("error");
  }
};


export const loginUserSuccess = (dispatch) => {
  console.log("entering1",dispatch);
  try {
    api2.post("/api/login").then((response) => {
      // dispatch(loginSuccess(response));
      console.log("entering",response);
    });
  } catch (e) {
    return console.log("error", e);
  }
};

export const counterSelector = (state) => state?.Counter;
export default counterSlice.reducer;
