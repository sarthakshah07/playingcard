import { InputAdornment, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";

const FieldText = ({
  type,
  value,
  onchange,
  onBlur,
  label,
  variant,
  id,
  InputProps,
  className,
  fullWidth,
  name,
  touched,
  errors,
}) => {
  return (
    <TextField
      fullWidth={fullWidth || false}
      sx={{ mt: 1.5, mb: 1.5 }}
      className={className}
      type={type}
      id={id}
      label={label}
      value={value}
      onChange={onchange}
      onBlur={onBlur}
      InputProps={InputProps}
      variant={variant}
      name={name}
      touched={touched}
      errors={errors}
    />
  );
};

export default FieldText;
