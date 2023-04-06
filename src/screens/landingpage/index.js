import React from "react";
import "./_landingPage.css";
import WrapperComponent from "../../components/WrapperComponent";
import { Box, Card,CardContent, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Timer from "../../components/timer";
import MyCard from "../../components/mycard";
import Slider from "react-slick";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import StarIcon from '@mui/icons-material/Star';

const LandingPage = () => {
  const handleDelete = () => {
    console.log("fsdfg");
  };
  const current = new Date();
  const TommorowDate = `${current.getDate() + 1}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const tommorrow = new Date(TommorowDate + 1);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width:10
  };
  return (
    <WrapperComponent isHeader>
      <Grid container>
        <Grid item xs={12} height="94vh">
          <Grid
            container
            xs={12}
            borderBottom={1}
            height="40vh"
            className="firstgrid"
          >
            <Grid container xs={6} justifyContent="end">
              <Grid
                item
                xs={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h4" fontFamily="cursive" color="white">
                  ONLINE LOTTERY IN INDIA
                </Typography>
                <br></br>
                <Typography variant="h6" textAlign="left" color="white">
                  Online lottery is more popular than ever, and you can play the
                  best games from anywhere in India. The concept is nothing new
                  in India, but playing online is a lot easier and more fun!
                  We’re sharing all our tips and tricks for the best online
                  lottery experience!
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
              <Grid item xs={6} border={1}></Grid>
            </Grid>
          </Grid>
          <Grid
            sx={{ display: { xs: "none", md: "flex" } }}
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
            <Grid container xs={12} md={24 / 3}>
              <Grid item xs={12} md={6} textAlign="center">
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
                    margin: "20px",
                  }}
                >
                  Time Left Until next Drawn:
                  <Timer TommorowDate={TommorowDate} />
                </Typography>
                <br />
              </Grid>
              {/* </Grid> */}
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
            >
                <Grid item xs={12}  sx={{display:"flex",justifyContent:"center"}}>
                <img src="https://img.freepik.com/free-vector/shiny-golden-win-prizes-gift-glowing-background_1017-40260.jpg?w=1380&t=st=1680687410~exp=1680688010~hmac=ec2d25bb0101b9029c9d691e98be2803fba64d2e8d9bb423d62d9d287cfc1326"
                   height={250} width={800} alt="" ></img>
                </Grid>
                <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
                <Typography
                variant="h2"
                sx={{color:"goldenrod"}}
                fontFamily="cursive"
                className="bigwin"
              >
                <span style={{ fontSize: "30px" }}>
                  Play and{" "}
                </span>{" "}
                <br />
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
              marginTop:"10px",
              paddingTop: 40,
              minHeight:{sm: 1000,xs:2000},
            }}
            className="firstgrid"
          >
           
            <Grid
              container
              xs={10}
              md={7}
              spacing={4}
              border={1}
              sx={{
                boxShadow: "5px 5px 30px  black",
                backgroundColor: "white",
                borderRadius: "55px 5px 55px 5px",
                paddingRight: "38px",
                maxHeight:200
              }}
            >
              <Grid item xs={12} textAlign="center"height={100}>
                <Typography variant="h4" className="toto">HOW TO PLAY THE GAME</Typography>

              </Grid>
              <Grid item md={4} xs={12}  >
                <MyCard sx={{width:"100%",height:"100%",borderRadius:"55px 5px 55px 5px", boxShadow:"20px 20px 20px",backgroundColor:"#31996A",padding:"50px"}} >
                    <CardContent sx={{display:"flex",justifyContent:"center"}} >
                      <LooksOneIcon style={{scale:"2",marginRight:"20px"}}/>
                      <Typography variant="h5" color="white" fontFamily="cursive">Choose the Card</Typography>
                    </CardContent>
                    <CardContent sx={{textAlign:"justify",width:"90%",marginLeft:"20%"}} >
                      <Typography variant="text" color="white" fontFamily="serif">Click on the <span style={{color:"red",fontWeight:"bold"}}>"CARD"</span>  and choose the Card for which you want to enjoy your bet(s).</Typography>
                    </CardContent>
                </MyCard>
              </Grid>
              <Grid item  md={4} xs={12}  >
                <MyCard sx={{width:"100%",height:"100%",borderRadius:"55px 5px 55px 5px", boxShadow:"20px 20px 20px",backgroundColor:"#31996A",padding:"50px"}} >
                    <CardContent sx={{display:"flex",justifyContent:"center"}} >
                      <LooksTwoIcon style={{scale:"2",marginRight:"20px"}}/>
                      <Typography variant="h5" color="white" fontFamily="cursive">Create your account</Typography>
                    </CardContent>
                    <CardContent sx={{textAlign:"justify",width:"100%",marginLeft:"20%"}} >
                      <Typography variant="text" color="white" fontFamily="serif">
                      Create your account, we need to know who can be the new millionaire!<br/> (if you have already created one, just login).</Typography>
                    </CardContent>
                </MyCard>
              </Grid>
              <Grid item  md={4} xs={12}  >
                <MyCard sx={{width:"100%",height:"100%",borderRadius:"55px 5px 55px 5px", boxShadow:"20px 20px 20px",backgroundColor:"#31996A",padding:"50px"}} >
                    <CardContent sx={{display:"flex",justifyContent:"center"}} >
                      <Looks3Icon style={{scale:"2",marginRight:"20px"}}/>
                      <Typography variant="h5" color="white" fontFamily="cursive">Complete the purchase</Typography>
                    </CardContent>
                    <CardContent sx={{textAlign:"justify",width:"100%",marginLeft:"20%"}} >
                      <Typography variant="text" color="white" fontFamily="serif">Once you have logged in to your account, finalize the purchase of your bets.<br/> $1 will be Deducted.</Typography>
                    </CardContent>
                </MyCard>
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
              marginTop:"10px",
              paddingTop: 30,
              minHeight:{sm: 1000,xs:2000},
            }}
            // className="firstgrid"
          >
           
            <Grid
              container
              xs={10}
              md={7}
              spacing={4}
              // border={1}
              sx={{
                boxShadow: "5px 5px 30px  black",
                borderRadius: "55px 10px 55px 10px",
                backgroundColor: "offwhite", 
                display:"flex",
                justifyContent:"center",

                // paddingRight: "38px",
                // minHeight:500
              }}
              pb={9}

            >
              <Grid item xs={12} textAlign="center" >
               <Typography variant="h4" 
              //  className="toto" 
               >WINNING HISTORY</Typography>
              </Grid>
              <Grid item xs={4} border={1} sx={{backgroundColor:"#31996A",height:500,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
              <Typography variant="h6"  className="bigwin"  fontFamily="cursive" fontSize="30px">Last Week </Typography>
                    <Typography variant="h5" className="bigwin" fontFamily="cursive" fontSize="50px">WINNERs</Typography>
                    
              </Grid>
              <Grid item xs={8} border={1} sx={{height:500, justifyContent:"center",alignItems:"center"}}>
                <Slider {...settings}>
                  <Card sx={{width:"5px",height:"20px" ,backgroundColor:"red"}}>
                    <CardContent>
                      <Typography>1</Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{width:"10px",height:"20px"}}>
                    <CardContent>
                      <Typography>1</Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{width:"10px",height:"20px"}}>
                    <CardContent>
                      <Typography>1</Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{width:"10px",height:"20px"}}>
                    <CardContent>
                      <Typography>1</Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{width:"10px",height:"20px"}}>
                    <CardContent>
                      <Typography>1</Typography>
                    </CardContent>
                  </Card>
                </Slider>
              </Grid>
             </Grid>
          </Grid>
        </Grid>
      </Grid>
    </WrapperComponent>
  );
};

export default LandingPage;
