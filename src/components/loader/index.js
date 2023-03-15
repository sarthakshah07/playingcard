import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { lemSelector } from "../../redux/lem/lemSlice";

const Loader = () => {
  const lemData = useSelector(lemSelector);
  const { loading } = lemData;

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={100} color="error" />
      </Box>
    );
  }
  return null;
};

export default Loader;
