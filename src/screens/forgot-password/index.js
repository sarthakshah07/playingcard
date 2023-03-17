// import React from "react";
// import { useSelector } from "react-redux";
// import WrapperComponent from "../../components/WrapperComponent";

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
import "./_forgotpassword.css";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import { useFormik } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import MyButton from "../../components/MyButton";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import FieldText from "../../components/fieldtext";
import * as yup from "yup";

// const initialValues = {
//   Email: "",
// };

// const validate = (values) => {
//   let errors = {};

//   if (!values.Email) {
//     errors.Email = "required*";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
//     errors.Email = "Invalid email address";
//   }

//   console.log("errors", errors);
//   return errors;
// };

export default function BasicCard() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const signInSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    // password: yup
    //   .string()
    //   .required("Password is required")
    //   .min(4, "Password is too short - should be 4 chars min"),
  });

  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit: (val) => {
        // dispatch(loginUserByEmailAction(val));
        console.log("email", val);
      },
    });
  // .......................................................................
  //   const [values, setValues] = React.useState({
  //     fullName: '',
  //     email: '',
  //     role: '',
  //     message: ''
  //   });
  //   const formik = useFormik({
  //     initialValues,
  //     validate,
  //   });

  const handleclick = () => navigate("/");

  // const [email,setEmail] =React.useState([])

  //   const SendPassword =(e)=>{
  //     // setEmail()
  //     e.preventDefault();
  //     emailjs.send('service_4yeybag', 'template_n2rxxv7', values, 'iRHPtssxLav_FkphK')
  //     .then(response => {
  //       console.log('SUCCESS!', response);
  //       setValues({
  //         fullName: 'sarthak',
  //         email: 'sarthakshah44993@gmail.com',
  //         role: '',
  //         message: 'test1'
  //       });

  //     }, error => {
  //       console.log('FAILED...', error);
  //     });
  //   }
  return (
    <WrapperComponent>
      {/* <div className="container-fluid"> */}
        <Grid container className="container-fluid">
          <Card className="forgotpsswdCard">
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
                  title="forgot password?"
                  variant="h1"
                />
              </Grid>

              <Grid xs={12} item sx={{ textAlign: "center", margin: "1%" }}>
                <Typography className="FPtext" gutterBottom>
                  No worries, we'll send you reset instructions.
                </Typography>
              </Grid>

              <Grid
                item
                xs={11}
                className="mail"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                }}
              >
                <FieldText
                  sx={{ mt: 1.5, mb: 1.5, width: "90%" }}
                  type="email"
                  id="email"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.email}
                  errors={errors?.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {touched.email && errors.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <MyButton
                  className="resetpsswd"
                  fullWidth={false}
                  title="Reset Password"
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
      {/* </div> */}
    </WrapperComponent>
  );
}
