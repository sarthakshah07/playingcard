import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/login";
import ForgotPassword from "../screens/forgot-password";
import SignUp from "../screens/signup";
import VerifyEmail from "../screens/verify-email";

function AuthNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AuthNavigator;
