import { Button } from "@mui/material";
import React from "react";

const MyButton = ({
  title,
  className,
  fullWidth,
  variant,
  handleClick,
  type,
  sx
}) => {
  return (
    <Button
      className={className}
      fullWidth={fullWidth || false}
      variant={variant}
      onClick={handleClick}
      type={type}
      sx={sx}
    >
      {title}
    </Button>
  );
};

export default MyButton;
