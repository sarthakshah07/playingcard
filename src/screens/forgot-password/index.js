// import React from "react";
// import { useSelector } from "react-redux";
// import WrapperComponent from "../../components/WrapperComponent";
// import { counterSelector } from "../../slice/counter/counterSlice";

// const ForgotPassword = () => {
//   const counterData = useSelector(counterSelector);
//   console.log("counterData : 0 ", counterData);

//   return <WrapperComponent>ForgotPassword</WrapperComponent>;
// };

// export default ForgotPassword;
import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import WrapperComponent from "../../components/WrapperComponent";
import { Grid } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import './_forgotpassword.css';
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import { useFormik } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import MyButton from "../../components/MyButton";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";

const initialValues = {
  Email: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.Email) {
    errors.Email = "required*";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = "Invalid email address";
  }

  console.log("errors", errors);
  return errors;
};

export default function BasicCard() {
  const formik = useFormik({
    initialValues,
    validate,
  });

  const navigate = useNavigate();
  const handleclick = () => navigate("/login");

  return (
    <WrapperComponent>
      <div className="container-fluid">
        <Card className="forgotpsswdCard">
          <Grid xs={12} border={1}>
            <Grid xs={12} item justifyContent="center" container>
              <KeyRoundedIcon className="icon" />
            </Grid>

            <Grid xs={12} item justifyContent="center" container>
              <CardHeader
                className="FPheader"
                title="forgot password?"
                variant="h1"
              />
            </Grid>

            <Grid xs={12} item justifyContent= "center" container>
              <Typography className="FPtext" gutterBottom>
                No worries, we'll send you reset instructions.
              </Typography>
            </Grid>

            <Grid item xs={12} className="mail">
              <TextField
                // fullWidth

                sx={{ mt: 1.5, mb: 1.5, width: "90%" }}
                type="email"
                id="Email"
                label="Email"
                value={formik.values.Email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.Email && formik.errors.Email ? (
                <div className="error">{formik.errors.Email}</div>
              ) : null}
            </Grid>

            <Grid item xs={12}>
              <MyButton
                className="resetpsswd"
                fullWidth={false}
                title="Reset Password"
                variant="contained"
                // handleClick={()=>console.log("1123")}
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
              container
            >
              <ArrowBackRoundedIcon />
              <MyButton
                className="bcklogin"
                fullWidth={false}
                title="Back to log in"
                handleClick={handleclick}
              />
            </Grid>
          </Grid>
        </Card>
      </div>
    </WrapperComponent>
  );
}

