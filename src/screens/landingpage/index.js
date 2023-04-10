import React, { useEffect } from "react";
import "./_landingPage.css";
import WrapperComponent from "../../components/WrapperComponent";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Timer from "../../components/timer";
import MyCard from "../../components/mycard";
import WinnerSlider from "../../components/winner-slider";
import WinnnerBanner from "../../assets/images/winnerbanner.png";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  const handleDelete = () => {
    console.log("fsdfg");
  };

  //changes
  const current = new Date();
  const TommorowDate = `${current.getDate() + 1}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const tommorrow = new Date(TommorowDate + 1);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <WrapperComponent isHeader>
      <Grid container position="absolute">
        <Grid item xs={12} height="94vh" data-aos="fade-right">
          <Grid
            container
            xs={12}
            borderBottom={1}
            height="40vh"
            className="firstgrid"
            data-aos="fade-down"
          >
            <Grid container xs={12} md={12} xl={6} sx={{justifyContent:{xs:"center",md:"center",sm:"center",xl:"end"}}}>
              <Grid
                item
                xs={11}
                sm={6}
                md={4}
                lg={7}
                xl={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                data-aos="fade-down"
              >
                <Typography
                  variant="h4"
                  fontFamily="cursive"
                  color="white"
                  data-aos="fade-down"
                >
                  ONLINE LOTTERY IN INDIA
                </Typography>
                <br></br>
                <Typography
                  variant="h6"
                  textAlign="left"
                  color="white"
                  data-aos="fade-down"
                >
                  Online lottery is more popular than ever, and you can play the
                  best games from anywhere in India. The concept is nothing new
                  in India, but playing online is a lot easier and more fun!
                  We’re sharing all our tips and tricks for the best online
                  lottery experience!
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} sx={{ display: {sm:"none",xs:"none",md:"none",lg:"none",xl:"flex"}, justifyContent: "end" }}>
              {/* <Grid item xs={6} md={6} > */}
                <img
                  src="card-images/HeartsCard/ACE_OF_HEARTS.png"
                  alt=""
                  height={200}
                  style={{
                    position: "absolute",
                    top:180,
                    right: 180,
                    rotate: "290deg",
                  }}
                  //  className="cardanimation1"
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  data-aos-delay="1500"
                ></img>
                <img
                  src="card-images/ClubsCard/ACE_OF_CLUBS.png"
                  alt=""
                  height={200}
                  style={{
                    position: "absolute",
                    top: 110,
                    right: 150,
                    rotate: "310deg",
                  }}
                  // className="cardanimation2"
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  data-aos-delay="1500"
                ></img>
                <img
                  src="card-images/DiamondsCard/ACE_OF_DIAMONDS.png"
                  alt=""
                  height={200}
                  style={{
                    position: "absolute",
                    top: 50,
                    right: 90,
                    rotate: "330deg",
                  }}
                  //  /className="cardanimation3"
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  data-aos-delay="1500"
                ></img>
                <img
                  src="card-images/SpadesCard/ACE_OF_SPADES.png"
                  alt=""
                  height={200}
                  style={{
                    position: "absolute",
                    top: 15,
                    right: 10,
                    rotate: "350deg",
                  }}
                  // className="cardanimation4"
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  data-aos-delay="1500"
                ></img>
              {/* </Grid> */}
            </Grid>
          </Grid>
          <Grid
            sx={{ display: { xs: "none",sm:"none", md: "none",lg:"flex" }, zIndex: 10 }}
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
                data-aos="zoom-in"
                data-aos-duration="4500"
                data-aos-delay="2000"
                sx={{
                  width: 380,
                  height: "50px",
                  fontSize: "20px",
                  padding: "20px",
                  justifyContent: "space-between",
                  backgroundColor: "#F4BB44",
                  boxShadow: "2px 2px 5px gray",
                  "&:hover": {
                    scale: "1.05",
                    backgroundColor: "#F4BB44",
                  },
                }}
                variant="contained"
                onClick={handleDelete}
                onDelete={handleDelete}
                deleteIcon={
                  <ExpandCircleDownOutlinedIcon
                    style={{ color: "gray", scale: "1.5" }}
                  />
                }
              />
              <Chip
                label="Winnig History"
                data-aos="zoom-in"
                data-aos-duration="4500"
                data-aos-delay="2500"
                sx={{
                  width: 380,
                  height: "50px",
                  fontSize: "20px",
                  padding: "20px",
                  justifyContent: "space-between",
                  backgroundColor: "#F4BB44",
                  "&:hover": {
                    background: "#F4BB44",
                    color: "black",
                    scale: "1.05",
                  },
                }}
                variant="contained"
                onClick={handleDelete}
                onDelete={handleDelete}
                deleteIcon={
                  <ExpandCircleDownOutlinedIcon
                    style={{
                      color: "gray",
                      scale: "1.5",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  />
                }
              />
              <Chip
                label="About Us"
                data-aos="zoom-in"
                data-aos-duration="4500"
                data-aos-delay="2800"
                sx={{
                  width: 380,
                  height: "50px",
                  fontSize: "20px",
                  padding: "20px",
                  justifyContent: "space-between",
                  backgroundColor: "#F4BB44",
                  "&:hover": {
                    background: "#F4BB44",
                    scale: "1.05",
                  },
                }}
                variant="contained"
                onClick={handleDelete}
                onDelete={handleDelete}
                deleteIcon={
                  <ExpandCircleDownOutlinedIcon
                    style={{ color: "gray", scale: "1.5" }}
                  />
                }
              />
            </Stack>
          </Grid>
          {/* section */}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container xs={12} md={8} >
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6} textAlign="center">
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
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Typography
                  sx={{
                    fontVariant: "small-caps",
                    fontWeight: "bold",
                    fontSize: "20px",
                    margin: "20px",
                    textAlign:"center"
                  }}
                >
                  Time Left Until next Drawn:
                  <Timer TommorowDate={TommorowDate} />
                </Typography>
                <br />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", height: 450 }}
          >
            <Grid
              container
              className="winpricecontainer"
              xs={12}
              md={8}
              height={450}
              data-aos="zoom-out-right"
              data-aos-duration="4500"
              data-aos-delay="2800"
            >
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={WinnnerBanner}
                  height={250}
                  width={300}
                  alt=""
                  data-aos="zoom-out-right"
                ></img>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography
                  variant="h2"
                  sx={{ color: "goldenrod" }}
                  fontFamily="cursive"
                  className="bigwin"
                  data-aos="zoom-out-right"
                >
                  <span style={{ fontSize: "30px" }}>Play and </span> <br />
                  Win Big
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              // backgroundColor: "#31996A",
              marginTop: "10px",
              paddingTop: 40,
              minHeight: { sm: 2500, xs: 2000, md:1500,lg:1100 },
            }}
            className="firstgrid"
          >
            <Grid
              container
              xs={10}
              md={7}
              sm={10}

              spacing={4}
              sx={{
                boxShadow: "5px 5px 30px  black",
                backgroundColor: "white",
                borderRadius: "55px 5px 55px 5px",
                paddingRight: "38px",
                maxHeight: 200,
              }}
            >
              <Grid item xs={12} textAlign="center" height={100}>
                <Typography variant="h4" className="toto" data-aos="fade-left">
                  HOW TO PLAY THE GAME
                </Typography>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12} xl={4} data-aos="fade-right">
                <MyCard
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "55px 5px 55px 5px",
                    boxShadow: "20px 20px 20px",
                    backgroundColor: "#31996A",
                    padding: "50px",
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <LooksOneIcon
                      style={{ scale: "2", marginRight: "20px" }}
                      data-aos="fade-left"
                    />
                    <Typography
                      variant="h5"
                      color="white"
                      fontFamily="cursive"
                      data-aos="fade-left"
                    >
                      Choose the Card
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      textAlign: "justify",
                      width: "90%",
                      marginLeft: "20%",
                    }}
                  >
                    <Typography
                      variant="text"
                      color="white"
                      fontFamily="serif"
                      data-aos="fade-left"
                    >
                      Click on the{" "}
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        "CARD"
                      </span>{" "}
                      and choose the Card for which you want to enjoy your
                      bet(s).
                    </Typography>
                  </CardContent>
                </MyCard>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12} xl={4} data-aos="fade-right">
                <MyCard
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "55px 5px 55px 5px",
                    boxShadow: "20px 20px 20px",
                    backgroundColor: "#31996A",
                    padding: "50px",
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <LooksTwoIcon
                      style={{ scale: "2", marginRight: "20px" }}
                      data-aos="fade-left"
                    />
                    <Typography
                      variant="h5"
                      color="white"
                      fontFamily="cursive"
                      data-aos="fade-left"
                    >
                      Create your account
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      textAlign: "justify",
                      width: "100%",
                      marginLeft: "20%",
                    }}
                  >
                    <Typography
                      variant="text"
                      color="white"
                      fontFamily="serif"
                      data-aos="fade-left"
                    >
                      Create your account, we need to know who can be the new
                      millionaire!
                      <br /> (if you have already created one, just login).
                    </Typography>
                  </CardContent>
                </MyCard>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12} xl={4} data-aos="fade-right">
                <MyCard
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "55px 5px 55px 5px",
                    boxShadow: "20px 20px 20px",
                    backgroundColor: "#31996A",
                    padding: "50px",
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Looks3Icon style={{ scale: "2", marginRight: "20px" }} />
                    <Typography
                      variant="h5"
                      color="white"
                      fontFamily="cursive"
                      data-aos="fade-left"
                    >
                      Complete the purchase
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      textAlign: "justify",
                      width: "100%",
                      marginLeft: "20%",
                    }}
                  >
                    <Typography
                      variant="text"
                      color="white"
                      fontFamily="serif"
                      data-aos="fade-left"
                    >
                      Once you have logged in to your account, finalize the
                      purchase of your bets.
                      <br /> $1 will be Deducted.
                    </Typography>
                  </CardContent>
                </MyCard>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            border={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: {md:"start", sm:"center",xs:"center"},
              justifyContent:"center",
              alignItems: "center",
              // backgroundColor: "#31996A",
              marginTop: "10px",
              paddingTop: {xs:1, sm:1 ,lg:10,xl:10},
              minHeight: { sm: 1000, xs: 1000 },
            }}
          >
            <Grid
              container
              xs={10}
              md={8}
              sx={{
                boxShadow: "5px 5px 30px  black",
                borderRadius: "55px 10px 55px 10px",
                backgroundColor: "offwhite",
                display: "flex",
                justifyContent: "center",
              }}
              pb={10}
            >
              {/* <Grid item xs={12} textAlign="center">
                <Typography
                  variant="h4"
                  data-aos="zoom-out-left"
                  data-aos-duration="4500"
                  data-aos-delay="100"
                  //  className="toto"
                >
                  WINNING HISTORY
                </Typography>
              </Grid> */}
              <Grid
                item
                xs={12}
                className="winnerback"
                sx={{
                  borderRadius: "55px 10px 5px 10px",
                  // backgroundColor: "#31996A",
                  height: {xs:300},
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex:10,
                  textAlign:"center"
                }}
              >
                <StarBorderIcon
                  sx={{ scale: "5", mb: "5%" }}
                  className="bigwin"
                  data-aos="zoom-out-left"
                  data-aos-duration="4500"
                  data-aos-delay="100"
                />

                {/* <Typography
                  variant="h6"
                  className="bigwin"
                  fontFamily="cursive"
                  fontSize="30px"
                  data-aos="zoom-out-left"
                  data-aos-duration="4500"
                  data-aos-delay="800"
                >
                  Last Week{" "}
                </Typography> */}
                <Typography
                  variant="h5"
                  className="bigwin"
                  fontFamily="apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif"
                  fontSize="50px"
                  data-aos="zoom-out-left"
                  data-aos-duration="4500"
                  data-aos-delay="800"
                  margin={0}
                >
                   Last Week{" "}WINNERS{" "}
                </Typography>
              </Grid>
              <Grid
                container
                xs={12}
                lg={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Paper
                  item
                  border={1}
                  elevation={0}
                  sx={{
                    width: "80px",
                    height: "51.4vh",
                    position: "absolute",
                    left: "39.4%",
                    background:"linear-gradient(to right, #31996A, #fff)",
                  }}
                  className="grad"
                ></Paper> */}

                <WinnerSlider
                  data-aos="fade-up"
                  //  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="4500"
                  data-aos-delay="1800"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </WrapperComponent>
  );
};

export default LandingPage;
