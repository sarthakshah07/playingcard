import { Grid } from "@mui/material";
import React from "react";
import './wrappercomponent.css'
const WrapperComponent = ({ children,sx }) => {
  return (
    //backgroundColor:"gray"
    <Grid sx={sx} height={"100vh"}  className="wrappermain" >
      {children}
    </Grid>
  );
};

export default WrapperComponent;
