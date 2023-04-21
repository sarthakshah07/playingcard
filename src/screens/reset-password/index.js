import * as React from "react";
import Card from "@mui/material/Card";

import WrapperComponent from "../../components/WrapperComponent";
import { Divider, Grid } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import "./_resetpassword.css";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";
import FieldText from "../../components/fieldtext";
import * as yup from "yup";
import Swal from "sweetalert2";
import MyButton from "../../components/MyButton";

import { useDispatch } from "react-redux";
// import { resetUserAction } from "../../redux/auth/middleware";




const resetPasswordSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});
const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
  };
  const navigate = useNavigate();

  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: resetPasswordSchema,
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

        // dispatch(resetUserAction(val));
        // console.log("val", val);
      },
    });

  return (
    <WrapperComponent>
      <Grid container className="container-fluid">
        <Card
          className="resetpsswdCard"
          xs={12}
          sx={{ minHeight: "fit-content", padding: "5%" }}
        >
          <form noValidate onSubmit={handleSubmit}>
            <Grid
              item
              sx={{
                width: "100%",

                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <KeyRoundedIcon className="icon" />
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
                title="Reset Password"
                variant="h1"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              display="flex"
              justifyContent="center"
              margin="5%"
            >
              <FieldText
                type="password"
                id="New Password"
                label="New Password"
                name="Password"
              />
            </Grid>

            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              margin="7%"
            >
              <FieldText
                type="password"
                id="password"
                label="Confirm New Password"
                name="password"
              />
            </Grid>

            <Grid container>
              <Grid item>
                <MyButton
                  className="pswd"
                  size="small"
                  title="continue"
                  variant="contained"
                  type="submit"
                />
              </Grid>
              <Grid item marginLeft={2}>
                <MyButton
                  className="pswd"
                  size="small"
                  title="cancel"
                  variant="contained"
                />
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </WrapperComponent>
  );
};
export default ResetPasswordPage;
