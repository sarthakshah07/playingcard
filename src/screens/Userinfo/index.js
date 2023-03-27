import { Typography } from "@mui/material";
import React from "react";
import WrapperComponent from "../../components/WrapperComponent";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import FieldText from "../../components/fieldtext";

const Userinfo = () => {
  return (
    <WrapperComponent isHeader>
      <Grid
        container
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            margin: "10%",
            display: "flex",
            padding: "1%",
          }}
        >
          <Grid xs={8} sx={{ height: "50%", width:"50%" }} item border={1}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ pt: 0 }}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></Grid>
                Name -
                <Typography
                  sx={{ fontSize: 18, textAlign: "center" }}
                  color="text.secondary"
                  gutterBottom
                >
                  {/* <FieldText 
                    fullWidth={true}
                    type="text"
                    label="name"




                    \

                    
                    id="name"
                    name="name"
                    variant="outlined"
                  /> */}
                </Typography>
                Email -
                {/* <FieldText
                  fullWidth={true}
                  type="email"
                  label="email"
                  id="email"
                  name="email"
                  variant="outlined"
                /> */}
                <Typography>
                  {/* <FieldText
                  fullWidth={true}
                  type="text"
                  label="phone number"
                  id="phone number"
                  name="phone number"
                  variant="outlined"
                /> */}
                </Typography>
                Phone Number -
              </CardContent>
              <CardActions>
                <Button>Edit Profile</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </WrapperComponent>
  );
};
export default Userinfo;
