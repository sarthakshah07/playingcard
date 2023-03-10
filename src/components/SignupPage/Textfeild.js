import React from "react";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import GirlRoundedIcon from "@mui/icons-material/GirlRounded";
import BoyRoundedIcon from "@mui/icons-material/BoyRounded";
import { useFormik } from "formik";
import { Grid } from "@mui/material";

const initialValues = {
  Firstname: "",
 
};

const validate = (values) => {
  let errors = {};

  if (
    !values.Firstname 
  ) {
    errors.Firstname = "required*";
   
  }
  console.log("errors", errors);
  if (!values.Email) {
    errors.Email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = "Invalid email address";
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
        sx={{ width: "47%" }}
        className="text-capitalize"
        type="text"
        label="First Name "
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        id="Firstname"
        value={formik.values.Firstname}
        onChange={formik.handleChange}
      />
      {formik.errors.Firstname ? (
        <div className="error">{formik.errors.Firstname}</div>
      ) : null}
      {/* <TextField
        sx={{ width: "47%", ml: 1.5 }}
        // sx={{ width: "45%" }}
        className="text-capitalize"
        type="text"
        label="Last Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        id="Lastname"
        value={formik.values.Lastname}
        onChange={formik.handleChange}
      />
      {formik.errors.Lastname ? (
        <div className="error">{formik.errors.Lastname}</div>
      ) : null}
      <br />
      <TextField
        sx={{ mt: 1.5, mb: 1.5 }}
        fullWidth
        type="email"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailRoundedIcon />
            </InputAdornment>
          ),
        }}
        id="Email"
        value={formik.values.Email}
        onChange={formik.handleChange}
        helperText="Please enter valid Email"
      />
      {formik.errors.Email ? (
        <div className="error">{formik.errors.Email}</div>
      ) : null}
      <br />
      <TextField
        fullWidth
        type="tel"
        label="Contact No"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ContactPhoneRoundedIcon />
            </InputAdornment>
          ),
        }}
        id="ContactNo"
        value={formik.values.ContactNo}
        onChange={formik.handleChange}
        helperText="Please enter valid contact no "
      />
      {formik.errors.ContactNo ? (
        <div className="error">{formik.errors.ContactNo}</div>
      ) : null}
      <br />
      <TextField
        halfwidth
        sx={{ width: "47%", mt: 1.5, mb: 1.5 }}
        className="text-capitalize"
        type="password"
        label="Create Password  "
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        id="Password"
        value={formik.values.Password}
        onChange={formik.handleChange}
      />
      {formik.errors.Password ? (
        <div className="error">{formik.errors.Password}</div>
      ) : null}
      <TextField
        halfwidth
        // sx={{ width: "45%" }}
        sx={{ width: "47%", ml: 1.5, mt: 1.5, mb: 1.5 }}
        type="password"
        label="Confirm Password "
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        id="Cpassword"
        value={formik.values.Cpassword}
        onChange={formik.handleChange}
      />
      {formik.errors.Cpassword ? (
        <div className="error">{formik.errors.Cpassword}</div>
      ) : null}
      <br />
      <FormControl
        sx={{ mt: 1.5, mb: 1.5 }}
        id="Gender"
        value={formik.values.Gender}
        onChange={formik.handleChange}
      >
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          id="Gender"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
            startAdornment={
              <InputAdornment position="start">
                <GirlRoundedIcon />
              </InputAdornment>
            }
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BoyRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      {formik.errors.Gender ? (
        <div className="error">{formik.errors.Gender}</div>
      ) : null} */}
    </Grid>
  );
}

export default Textfield;
