import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import WrapperComponent from "../../components/WrapperComponent";
import { Grid, IconButton } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import "./_resetpassword.css";
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";
import { useFormik } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import MyButton from "../../components/MyButton";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
// import emailjs from "emailjs-com";
import FieldText from "../../components/fieldtext";
import * as yup from "yup";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Resetpassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const initialValues = {
    Password: "",
  };

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const resetPasswordSchema = yup.object().shape({
    password: yup
      .string()
      .required("required")
      .min(4, "Password is too short - should be 4 chars min")
      .matches(passwordRules, { message: "Please create a stronger password" }),
    cPassword: yup
      .string()
      .required("required")
      .min(4, "Password is too short - should be 4 chars min")
      .oneOf([yup.ref("Password"), null], "Passwords must match"),
  });

  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: resetPasswordSchema,
      onSubmit: (val) => {
        console.log("password", val);
      },
    });

  const handleclick = () => navigate("/");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    console.log("show password");
  };

  return (
    <WrapperComponent>
      {/* <div className="container-fluid"> */}
      <Grid container className="container-fluid">
      <Grid
          item
          sx={{
            width: { xs: "85vw",lg:"40vw",sm:"70vw",md:"60vw"  },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        <Card className="resetpsswdCard">
          <form noValidate onSubmit={handleSubmit}>
            <Grid
              xs={12}
              item
              sx={{
                
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <LockResetRoundedIcon className="icon" />
            </Grid>

            <Grid
              xs={12}
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <CardHeader
                className="FPheader"
                title="Reset your password"
                variant="h1"
              />
            </Grid>

            <Grid xs={12} item sx={{ textAlign: "center", margin: "1%" }}>
              <Typography className="FPtext" gutterBottom>
                Your New Password Must Be Differnt from Previously Used Password
              </Typography>
            </Grid>

            <Grid
              item
              xs={11}
              className="PASSWORD"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <FieldText
                fullWidth={true}
                sx={{ mt: 1.5, mb: 1.5 }}
                type={showPassword ? "text" : "password"}
                id="password"
                label="New Password"
                name="Password"
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched?.Password}
                errors={errors?.Password}
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {/* {touched.password && errors.password ? (
                <div className="error">{errors.password}</div>
              ) : null} */}
            </Grid>
            <Grid
              item
              xs={11}
              className="CPASSWORD"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <FieldText
                fullWidth={true}
                type={showPassword ? "text" : "password"}
                value={values.cPassword}
                onchange={handleChange}
                onBlur={handleBlur}
                label="Confirm Password"
                id="cPassword"
                name="cPassword"
                touched={touched?.cPassword}
                errors={errors?.cPassword}
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid marginTop={"2%"} item xs={12}>
              <MyButton
                className="resetpsswd"
                fullWidth={false}
                title="Submit"
                variant="contained"
                // handleClick={SendPassword}
                type="submit"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "1.5%",
              }}
            >
              <ArrowBackRoundedIcon />
              <MyButton
                className="bcklogin"
                fullWidth={false}
                title="Back to log in"
                handleClick={handleclick}
              />
            </Grid>
          </form>
        </Card>
        </Grid>
      </Grid>
      {/* </div> */}
    </WrapperComponent>
  );
}
