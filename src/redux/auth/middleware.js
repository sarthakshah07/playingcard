
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useState } from "react";
import { removeUser, setUser } from "../../services/token";
import { hideLoader, showLoader } from "../lem/lemSlice";
import { loginWithEmailAsync, logoutAsync, signUpAsync } from "./services";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export const loginUserByEmailAction = createAsyncThunk(
  
  "auth/loginByEmail",
  async (request, { rejectWithValue, dispatch }) => {
  
    console.log("req",request);
    try {
      setTimeout(()=>{
        dispatch(showLoader());
      },2000)
      const response = await loginWithEmailAsync(request);
      console.log("res",response);
      if (response.status === 200) {
      console.log("res",response);
        setTimeout(() => {
          dispatch(hideLoader());
        }, 2000);
        await setUser(response.data.user.token);
        const fakeJson={

        }
        // await setUser(fakeJson)
        window.location.reload()
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          zIndex: 1,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logged in successfully",
          timer:3000
        });
       
        // navigate("/")
        return ;
      }
      else{
       console.log("sdfhgsjdhfg");
        setTimeout(() => {
          dispatch(hideLoader());
        }, 2000);
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          zIndex: 1,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "error",
          title: "Log in unsuccessfuLL",
          text:"Username or Password is incorret",
          timer:3000
        });
        rejectWithValue(response)
        return ;
      }
     
    } catch (error) {
      console.log("error",error);
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const logoutUserAction = createAsyncThunk(
  "auth/logout",
  async (request, { rejectWithValue, dispatch }) => {
    try {
      setTimeout(() => {
        dispatch(showLoader());
      }, 2000);
      // const response = await logoutAsync(request);
      // if (response.status === 200 ) {
      //   await removeUser();
      //   dispatch(hideLoader());
      //   window.location.reload()
      //   return null;
      // }
      // return rejectWithValue(response);
      await removeUser();
      dispatch(hideLoader())
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