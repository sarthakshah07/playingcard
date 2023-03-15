import { Button } from "@mui/material";
import React from "react";

const MyButton = ({
  title,
  className,
  fullWidth,
  variant,
  handleClick,
  type,
}) => {
  return (
    <Button
      className={className}
      fullWidth={fullWidth || false}
      variant={variant}
      onClick={handleClick}
      type={type}
    >
      {title}
    </Button>
  );
};

export default MyButton;
