import React from "react";
import SignUp from "./components/SignupPage";

import AppNavigator from "./navigators/AppNavigator";
import AuthNavigator from "./navigators/AuthNavigator";

function App() {
  return (
    <>
      <AppNavigator />
      <AuthNavigator />
      {/* <SignUp/> */}
    </>
  );
}

export default App;
