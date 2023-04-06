import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../screens/home"));
const NotFound = lazy(() => import("../screens/page-not-found"));
const Userinfo  = lazy (() =>  import ("../screens/Userinfo/index"))
const UserCardShow = lazy(() => import ("../screens/showcards/index"));
const Wallet = lazy(() => import("../screens/Wallet"));
const LandingPage = lazy(()=> import("../screens/landingpage"))

  
function AppNavigator() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element= {<UserCardShow/>} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/Userinfo" element={<Userinfo />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />

         
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default AppNavigator;
