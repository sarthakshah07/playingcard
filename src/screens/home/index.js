import React, { useEffect, useState } from "react";
import { Grid, Skeleton, Switch, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import HomeCard from "../../components/HomeCard";
import WrapperComponent from "../../components/WrapperComponent";
import headcardicon from "../../assets/images/headcardicon.png";
import { dashboardSelector } from "../../redux/dashboard/dashboardSlice";
import { fetchCardAction } from "../../redux/dashboard/middleware";
import "./_home.css";
import MyButton from "../../components/MyButton";
import PreviewIcon from '@mui/icons-material/Preview';

const HomeScreen = () => {
  const [showCards, setShowCards]=useState(false)
  const dashboardData = useSelector(dashboardSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(fetchCardAction());
  }, []);

  return (
    <WrapperComponent isHeader>
      <Grid
        container
        sx={{
          minHeight: "94vh",
          maxWidth: "100%",
          backgroundColor: "green",
          marginTop: "81px",
          paddingTop: "1%",
        }}
        xs={8}
        md={12}
      >
        <Marquee
          speed={200}
          gradientWidth={200}
          gradientColor={[200, 200, 200]}
        >
          <Typography style={{ color: "black" }}>
            <img src={headcardicon} alt=" " />
            Choose Card{" "}
          </Typography>
        </Marquee>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex ",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PreviewIcon sx={{ color: "lightseagreen", scale: "2" }} />
          <br />
          <MyButton
              varient="text"
              size="small"
              title="show cards"
              sx={{color:"black"}}
              handleClick={()=>setShowCards(true)}
              />
          {/* <Switch
            // checked={checked}
            onChange={()=>setShowCards(true)}
            inputProps={{ "aria-label": "controlled"}
          }
          /> */}
        </Grid>
        <Grid
          item
          xs={9}
          md={12}
          className="maingrid"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingRight: "4%",
            marginTop: "5%",
          }}
        >
          {dashboardData?.cardsData.map((cardItem) => (
            <Grid item xs={4} md={12 / 13}>
              <HomeCard showCards={showCards} data={cardItem} />
            </Grid>
          ))}
        </Grid>
        <Marquee
          speed={200}
          gradientWidth={200}
          gradientColor={[200, 200, 200]}
        >
          <Typography style={{ color: "black" }}>
            <span style={{ fontSize: "20px", color: "red" }}>
              Choose by clicking on Card
            </span>
          </Typography>
        </Marquee>
      </Grid>
    </WrapperComponent>
  );
};

export default HomeScreen;
