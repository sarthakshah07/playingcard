import React from "react";
import AppNavigator from "./navigators/AppNavigator";
import AuthNavigator from "./navigators/AuthNavigator";

function App() {
  return (
    <>
      <AppNavigator />
      <AuthNavigator />
    </>
  );
}

export default App;
