import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Grid } from "@mui/material";
import "./_logincard.css";
import { useFormik } from "formik";


const initialValues = {
  Username: " ",
  Password: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.Username || !values.Password) {
    errors.Username = "required*";
    errors.Password = "required*";
  }
  console.log("errors", errors);
  return errors;
};
function Textfield() {
  const formik = useFormik({
    initialValues,
    validate,
  });

  console.log("Form values", formik.values);
  return (
    <Grid className="container-fluid">
      <TextField
        fullWidth
        sx={{ mt: 1.5, mb: 1.5 }}
        type="text"
        id="Username"
        label="Username"
        value={formik.values.Username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      {formik.errors.Username ? (
        <div className="error">{formik.errors.Username}</div>
      ) : null}
      <br />
      <TextField
        fullWidth
        className=" my-5"
        type="password"
        id="Password"
        label="Password"
        value={formik.values.Password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      {formik.errors.Password ? (
        <div className="error">{formik.errors.Password}</div>
      ) : null}
    </Grid>
  );
}

export default Textfield;
