import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/loader";

const Login = lazy(() => import("../screens/login"));
const ForgotPassword = lazy(() => import("../screens/forgot-password"));
const SignUp = lazy(() => import("../screens/signup"));
const VerifyEmail = lazy(() => import("../screens/verify-email"));
const NotFound = lazy(() => import("../screens/page-not-found"));
const LandingPage = lazy(()=> import ("../screens/landingpage"))


function AuthNavigator() {
  return (
    <Suspense
      fallback={
        <>
          <h2><Loader/></h2>
        </>
      }   
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/Landingpage" element={<LandingPage/>} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default AuthNavigator;
