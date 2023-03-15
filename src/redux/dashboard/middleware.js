import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCardsAsync } from "./services";
import { cardsData } from "../../mock-data/card";
import { hideLoader, showLoader } from "../lem/lemSlice";

export const fetchCardAction = createAsyncThunk(
  "auth/fetchCards",
  async (request, { rejectWithValue, dispatch }) => {
    try {
      dispatch(showLoader({ message: "Loading..........." }));
      const response = await fetchCardsAsync(request);
      if (response?.status === 200) {
        setTimeout(() => {
          dispatch(hideLoader());
        }, 1500);
        return cardsData;
      }
      return rejectWithValue(response);
    } catch (error) {
      setTimeout(() => {
        dispatch(hideLoader());
      }, 1500);
      return rejectWithValue(error);
    }
  }
);

// export const fetchCard = createAsyncThunk("auth/cads")
