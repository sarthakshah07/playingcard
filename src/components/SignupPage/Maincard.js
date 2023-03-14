import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import MyButton from "../MyButton";
// import "./_logincard.css";
import { Grid, IconButton, InputAdornment } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
// import Textfield from "./Textfeild";
import "./_SignupPage.css";
import FieldText from "../fieldtext";
import { useFormik } from "formik";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
// import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
// import { RemoveRedEyeRounded } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// const card = (
//   <React.Fragment>

//   </React.Fragment>
// );
const initialValues = {
  Firstname: "",
  Lastname: "",
  email: "",
  ContactNo: "",
  Password: "",
  Cpassword: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.Firstname) {
    errors.Firstname = "Required*";
  }
  if (!values.Lastname) {
    errors.Lastname = "Required*";
  }
  if (!values.ContactNo) {
    errors.ContactNo = "Required*";
  }
  if (!values.Password) {
    errors.Password = "Required*";
  }
  if (!values.Cpassword) {
    errors.Cpassword = "Required*";
  }
  // console.log("errors", errors);
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.email = "Invalid email address";
  }
  if (values.Password !== values.Cpassword) {
    errors.Password = "not matching";
  }
  console.log("errors", errors);
  return errors;
};

export default function Maincard() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    console.log("show password");
  };

  const formik = useFormik({
    initialValues,
    validate,
  });
  return (
    <Grid className="container">
      <Grid>
        <Box>
          <Card className="signupbox">
            <CardContent>
              <CardHeader
                title="Sign up"
                variant="h1"
                sx={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
                className="Cardheader"
              />

              <Typography sx={{ mt: 1.5, mb: 1.5 }} color="text.secondary">
                {/* <Textfield/> */}
                <Grid container xs={12}>
                  <Grid item xs={6}>
                    <FieldText
                      fullWidth={true}
                      className="firstname"
                      type="text"
                      value={formik.values.Firstname}
                      onchange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      label="First Name"
                      id="Firstname"
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {formik.touched.Firstname && formik.errors.Firstname ? (
                      <div className="error">{formik.errors.Firstname}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={6}>
                    <FieldText
                      className="lastname"
                      type="text"
                      value={formik.values.Lastname}
                      onchange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      label="Last Name"
                      id="Lastname"
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {formik.touched.Lastname && formik.errors.Lastname ? (
                      <div className="error">{formik.errors.Lastname}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <FieldText
                      fullWidth={true}
                      type="email"
                      value={formik.values.email}
                      onchange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      label="Email"
                      id="email"
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailRoundedIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <FieldText
                      fullWidth={true}
                      type="tel"
                      value={formik.values.ContactNo}
                      onchange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      label="Contact Number"
                      id="ContactNo"
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneRoundedIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {formik.touched.ContactNo && formik.errors.ContactNo ? (
                      <div className="error">{formik.errors.ContactNo}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={6}>
                    <FieldText
                      fullWidth={true}
                      // type="password"
                      type={showPassword ? "text" : "password"}
                      id="Password"
                      value={formik.values.Password}
                      onchange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      label="Password"
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <KeyRoundedIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {formik.touched.Password && formik.errors.Password ? (
                      <div className="error">{formik.errors.Password}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={6}>
                    <FieldText
                      className="lastname"
                      // type="password"
                      type={showPassword ? "text" : "password"}
                      value={formik.values.Cpassword}
                      onchange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      label="Confirm Password"
                      id="Cpassword"
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <KeyRoundedIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            {/* <RemoveRedEyeRounded /> */}
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {formik.touched.Cpassword && formik.errors.Cpassword ? (
                      <div className="error">{formik.errors.Cpassword}</div>
                    ) : null}
                  </Grid>
                </Grid>
              </Typography>
              <Typography variant="body2" className="signupboxfooter">
                <MyButton
                  className="signup"
                  fullWidth={false}
                  title="sign up"
                  variant="contained"
                />
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
