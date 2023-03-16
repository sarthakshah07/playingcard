import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header";

function WrapperComponent(props) {
  const { children, isHeader } = props;
  return (
    <Box sx={{ width: "100%"}}>
      <CssBaseline />
      <Box >
        {isHeader && <Header />}
        {children}
      </Box>
    </Box>
  );
}
export default WrapperComponent;
