import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser } from "../../services/token";
import { hideLoader, showLoader } from "../lem/lemSlice";
import { loginWithEmailAsync } from "./services";

export const loginUserByEmailAction = createAsyncThunk(
  "auth/loginByEmail",
  async (request, { rejectWithValue, dispatch }) => {
    try {
      dispatch(showLoader({ message: "logging in..........." }));
      const response = await loginWithEmailAsync(request);
      if (response.status === 200) {
        const fakeJson = {
          name: "Harshad Makwana",
          email: "harshadmakwana@gmail.com",
          token:
            "dsaddasdasdasdasdkjhakjhkhfjkhsdfhsdkfjhsdkjfhkadshfksdhfkhasdkfhasdkfhsdfkhfjksdfkjsdhfkjsdfjksdfkjhasdf",
        };
        await setUser(fakeJson);
        setTimeout(() => {
          dispatch(hideLoader());
        }, 1500);
        return fakeJson;
      }
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);
