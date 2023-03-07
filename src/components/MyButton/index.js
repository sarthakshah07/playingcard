import { Button } from "@mui/material";
import React from "react";

const MyButton = ({ title, fullWidth, variant, handleClick }) => {
  return (
    <Button fullWidth={fullWidth || false} variant={variant} onClick={handleClick}>
      {title}
    </Button>
  );
};

export default MyButton;
