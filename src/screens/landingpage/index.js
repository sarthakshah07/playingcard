import React from "react";
import "./_landingPage.css";
import WrapperComponent from "../../components/WrapperComponent";
import { Box, Card, Chip, Grid, Stack, Typography } from "@mui/material";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Timer from "../../components/timer";

const LandingPage = () => {
  const handleDelete = () => {
    console.log("fsdfg");
  };
  const current = new Date();
  const TommorowDate = `${current.getDate() + 1}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const tommorrow = new Date(TommorowDate + 1);
  return (
    <WrapperComponent isHeader>
      <Grid container >
        <Grid item xs={12} height="94vh" >
          <Grid
            container
            xs={12}
            borderBottom={1}
            height="35vh"
            className="firstgrid"
          >
            <Grid item xs={6} border={1}></Grid>
            <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
              <Grid item xs={6} border={1}></Grid>
            </Grid>
          </Grid>
          <Grid
            sx={{display:{xs: "none", md:"flex"}}}
            item
            boxShadow={10}
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              direction="row"
              justifyContent="center"
              spacing={5}
              padding={2}
            >
              <Chip
                label="How To Play"
                sx={{
                  width: 380,
                  height: "50px",
                  fontSize: "20px",
                  padding: "20px",
                  justifyContent: "space-between",
                  backgroundColor:"#F4BB44",
                  boxShadow:"2px 2px 5px gray",
                  "&:hover": {
                    scale:"1.05",
                    backgroundColor:"#F4BB44"
                  },
                }}
                variant="contained"
                onClick={handleDelete}
                onDelete={handleDelete}
                deleteIcon={
                  <ExpandCircleDownOutlinedIcon style={{color:"gray",scale:"1.5" }} />
                }
              />
              <Chip
                label="Winnig History"
                sx={{
                    width: 380,
                    height: "50px",
                    fontSize: "20px",
                    padding: "20px",
                    justifyContent: "space-between",
                    backgroundColor:"#F4BB44",
                    "&:hover": {
                      background: "#F4BB44",
                      color:"black",
                      scale:"1.05"
                    },
                  }}
                  variant="contained"
                  onClick={handleDelete}
                  onDelete={handleDelete}
                  deleteIcon={
                    <ExpandCircleDownOutlinedIcon style={{color:"gray",scale:"1.5",'&:hover':{
                        color:"black"
                    } }} />
                  }
              />
              <Chip
                label="About Us"
                sx={{
                    width: 380,
                    height: "50px",
                    fontSize: "20px",
                    padding: "20px",
                    justifyContent: "space-between",
                    backgroundColor:"#F4BB44",
                    "&:hover": {
                      background: "#F4BB44",
                      scale:"1.05"
                    },
                  }}
                  variant="contained"
                  onClick={handleDelete}
                  onDelete={handleDelete}
                  deleteIcon={
                    <ExpandCircleDownOutlinedIcon style={{color:"gray",scale:"1.5" }} />
                  }
              />
            </Stack>
          </Grid>
          {/* section */}
          <Grid item border={1} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container border={1} xs={12} md={24/3} >
                <Grid item xs={12} md={6} border={1}textAlign="center">
                {/* <iframe src="https://giphy.com/embed/Up8AgrlWr6q5WaYufh" width="480" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lets-play-buumi-buumiplayscape-Up8AgrlWr6q5WaYufh"></a></p> */}
                {/* <iframe src="https://giphy.com/embed/B4qNMPzBc84Za" width="336" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/made-by-abvh-playing-cards-B4qNMPzBc84Za"></a></p> */}
                <iframe src="https://giphy.com/embed/3orieMHl3j2MgK5xAc" width="480" height="362" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/season-16-the-simpsons-16x7-3orieMHl3j2MgK5xAc">via GIPHY</a></p>
                    <Typography
                        sx={{
                            mt: 3,
                            fontVariant: "small-caps",
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                        >
                        Tommorrow's date : {TommorowDate}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography
                      sx={{
                        fontVariant: "small-caps",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Time Left:
                      <Timer TommorowDate={TommorowDate} />
                    </Typography>
                    <br />
                    
                </Grid>
                {/* </Grid> */}
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </WrapperComponent>
  );
};

export default LandingPage;
