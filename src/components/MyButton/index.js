import { Button } from "@mui/material";
import React from "react";

const MyButton = ({ title,className, fullWidth, variant, handleClick }) => {
  return (
    <Button className={className} fullWidth={fullWidth || false} variant={variant} onClick={handleClick}>
      {title}
    </Button>
  );
};

export default MyButton;
