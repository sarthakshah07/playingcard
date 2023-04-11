import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../screens/login"));
const ForgotPassword = lazy(() => import("../screens/forgot-password"));
const SignUp = lazy(() => import("../screens/signup"));
const VerifyEmail = lazy(() => import("../screens/verify-email"));
const LandingPage = lazy(()=> import("../screens/landingpage"))
const NotFound = lazy(() => import("../screens/page-not-found"));


function AuthNavigator() {
  return (
    <Suspense
      fallback={
        <>
          <h2>loading.........</h2>
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
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default AuthNavigator;
