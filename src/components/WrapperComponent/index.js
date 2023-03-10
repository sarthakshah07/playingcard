import { Grid } from "@mui/material";
import React from "react";

const WrapperComponent = ({ children,sx }) => {
  return (
    //backgroundColor:"gray"
    <Grid sx={sx} height={"100vh"} container>
      {children}
    </Grid>
  );
};

export default WrapperComponent;
