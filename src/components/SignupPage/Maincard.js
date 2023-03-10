import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import MyButton from "../MyButton";
// import "./_logincard.css";
import { Grid } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Textfield from "./Textfeild";
import "./_SignupPage.css"

const card = (
  <React.Fragment>
    <Card className="signupbox">
      <CardContent>
        <CardHeader title="Sign up"  variant="h1" sx={{fontFamily:"Georgia, 'Times New Roman', Times, serif" }} className="Cardheader" />
        
        <Typography sx={{ mt: 1.5, mb: 1.5 }} color="text.secondary">
          <Textfield/>
        </Typography>
        <Typography variant="body2" className="signupboxfooter">
          <MyButton
            className="signup"
            fullWidth={false}
            title="sign up"
            variant="contained"
          />
          <br />
        </Typography>
      </CardContent>
    </Card>
  </React.Fragment>
);

export default function Maincard() {
  return (
    <Grid
      className="container"
    >
      <Grid>
        <Box>
          {card}
        </Box>
      </Grid>
    </Grid>
  );
}

