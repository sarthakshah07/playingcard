
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useState } from "react";
import { removeUser, setUser } from "../../services/token";
import { hideLoader, showLoader } from "../lem/lemSlice";
import { loginWithEmailAsync, logoutAsync, signUpAsync } from "./services";


export const loginUserByEmailAction = createAsyncThunk(
  "auth/loginByEmail",
  async (request, { rejectWithValue, dispatch }) => {
    try {
      
      dispatch(showLoader({ message: "logging in..........." }));
      const response = await loginWithEmailAsync(request);
      console.log("res",response);
      if (response.status === 200) {
        const fakeJson = {
          // name: "Harshad Makwana",
          // email: "harshadmakwana@gmail.com",
          // token:
          //   "dsaddasdasdasdasdkjhakjhkhfjkhsdfhsdkfjhsdkjfhkadshfksdhfkhasdkfhasdkfhsdfkhfjksdfkjsdhfkjsdfjksdfkjhasdf",
        };
        await setUser(fakeJson);
        setTimeout(() => {
          dispatch(hideLoader());
        }, 1500);
        return fakeJson;
      }
      return rejectWithValue(response);
    } catch (error) {
      console.log("error");
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const logoutUserAction = createAsyncThunk(
  "auth/logout",
  async (request, { rejectWithValue, dispatch }) => {
    try {
      dispatch(showLoader({ message: "logging in..........." }));
      const response = await logoutAsync(request);
      if (response.status === 200 ) {
        await removeUser();
        dispatch(hideLoader());
        return null;
      }
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);
export const signUpUserAction = createAsyncThunk(
  "auth/signup",
  async (request, { rejectWithValue, dispatch }) => {
    try {
      console.log("dispatch",request);
      dispatch(showLoader({ message: "sign up..........." }));
      const response = await signUpAsync(request);
      if (response.status === 200) {
        await setUser(request);
        
        dispatch(hideLoader());
        return null;
      }
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);