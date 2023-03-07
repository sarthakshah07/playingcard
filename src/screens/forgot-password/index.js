import React from "react";
import { useSelector } from "react-redux";
import WrapperComponent from "../../components/WrapperComponent";
import { counterSelector } from "../../slice/counterSlice";

const ForgotPassword = () => {
  const counterData = useSelector(counterSelector);
  console.log("counterData : 0 ", counterData);

  return <WrapperComponent>ForgotPassword</WrapperComponent>;
};

export default ForgotPassword;
