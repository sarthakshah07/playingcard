import React from "react";
import WrapperComponent from "../../components/WrapperComponent";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import FieldText from "../../components/fieldtext";
import * as yup from "yup";
import "./_logincard.css";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
  Typography,
} from "@mui/material";
import MyButton from "../../components/MyButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { loginUserByEmailAction } from "../../redux/auth/middleware";
import { authSelector } from "../../redux/auth/authSlice";
import Swal from "sweetalert2";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector(authSelector);
  console.log("authData : ", authData);
  const initialValues = {
    emaill: "",
    password: "",
  };
  const signInSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars min"),
  });
  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit: (val, err) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          zIndex: 1,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logged in successfully",
        });
        dispatch(loginUserByEmailAction(val));
      },
    });
  const NavigateOnClick = () => {
    navigate("/forgot-password");
  };
  const NavigateOnClickRegistraion = () => {
    navigate("/signUp");
  };
  return (
    <WrapperComponent>
      <Grid container justifyContent="center" border={1} className="container">
        <Grid
          item
          sx={{
            width: { xs: "95vw", lg: "40vw", sm: "70vw", md: "60vw" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Card className="loginbox">
              <CardContent>
                <CardHeader
                  className="Cardheader"
                  title="Sign in"
                  variant="h1"
                  sx={
                    {
                      // fontFamily: "Georgia, 'Times New Roman', Times, serif",
                      // textShadow: "1px 1px 20px red",
                    }
                  }
                />
                <form noValidate onSubmit={handleSubmit}>
                  <Typography sx={{ mt: 1.5, mb: 1.5 }} color="text.secondary">
                    <Grid container>
                      <Grid item xs={12}>
                        <FieldText
                          sx={{
                            fontFamily:
                              "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serifi",
                          }}
                          fullWidth={true}
                          type="email"
                          value={values.email}
                          onchange={handleChange}
                          onBlur={handleBlur}
                          label="Email"
                          id="email"
                          name="email"
                          touched={touched?.userName}
                          errors={errors?.userName}
                          variant="standard"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {touched.email && errors.email ? (
                          <div className="error">{errors.email}</div>
                        ) : null}
                      </Grid>
                      <Grid item xs={12}>
                        <FieldText
                          sx={{
                            fontFamily:
                              "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serifi",
                          }}
                          fullWidth={true}
                          type="password"
                          id="password"
                          value={values.password}
                          onchange={handleChange}
                          onBlur={handleBlur}
                          label="password"
                          name="password"
                          touched={touched?.password}
                          errors={errors?.password}
                          variant="standard"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {touched.password && errors.password ? (
                          <div className="error">{errors.password}</div>
                        ) : null}
                      </Grid>
                    </Grid>
                  </Typography>
                  <Typography variant="body2" className="boxfooter">
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ display: "flex", justifyContent: "space-evenly" }}
                      >
                        <MyButton
                          className="signin"
                          fontFamily="apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif"
                          // fullWidth={true}
                          title="sign in"
                          variant="contained"
                          type="submit"
                        />{" "}
                        <MyButton
                          className="signin"
                          size="small"
                          title="Signup"
                          variant="contained"
                          handleClick={NavigateOnClickRegistraion}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <MyButton
                          // sx={{fonts}}
                          className="forgotpassword"
                          size="small"
                          title="Forgot password ?"
                          handleClick={NavigateOnClick}
                        />
                      </Grid>
                    </Grid>
                  </Typography>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </WrapperComponent>
  );
};
export default Login;
