import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import MyButton from "../MyButton";
import "./_logincard.css";
import { Grid } from "@mui/material";
import Textfield from "./Textfield";
import CardHeader from "@mui/material/CardHeader";
import { Handshake } from "@mui/icons-material";

const handleSignin = (e) => {
  e.preventDefault();
}
console.log("123");
const card = (
  
  <React.Fragment>
    <Card className="loginbox">
      <CardContent>
        <CardHeader className="Cardheader" title="Sign in"  variant="h1" sx={{fontFamily:"Georgia, 'Times New Roman', Times, serif" }}    />
        
        <Typography sx={{ mt: 1.5, mb: 1.5 }} color="text.secondary">
          <Textfield />
        </Typography>
        <Typography variant="body2" className="boxfooter">
          <MyButton
            className="signin"
            fullWidth={false}
            title="sign in"
            variant="contained"
            onClick={handleSignin}
          />
          <MyButton
            className="forgotpassword"
            fullWidth={false}
            size="small"
            title= "Forgot password ?"
            variant="text"
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
