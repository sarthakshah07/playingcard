import { Grid } from "@mui/material";
import React from "react";

const WrapperComponent = ({ children }) => {
  return (
    <Grid sx={{ }} container>
      {children}
    </Grid>
  );
};

export default WrapperComponent;
