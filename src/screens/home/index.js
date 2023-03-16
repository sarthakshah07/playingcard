import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import HomeCard from "../../components/HomeCard";
import WrapperComponent from "../../components/WrapperComponent";
import headcardicon from "../../assets/images/headcardicon.png";
import { dashboardSelector } from "../../redux/dashboard/dashboardSlice";
import { fetchCardAction } from "../../redux/dashboard/middleware";
import "./_home.css";

const HomeScreen = () => {
  const dashboardData = useSelector(dashboardSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCardAction());
  }, []);

  return (
    <WrapperComponent isHeader >
       <Grid container sx={{minHeight:"94vh",maxWidth:"100%",backgroundColor:"green",marginTop:"65px",padding:"0"}} xs={8} md={12} >
        <Marquee
          speed={200}
          gradientWidth={200}
          gradientColor={[200, 200, 200]}
        >
          <Typography style={{ color: "black" }}>
            <img src={headcardicon} alt=" "/>Choose Card{" "}
          </Typography>
        </Marquee>
        <Grid
          item
          xs={9}
          md={12}
          className="maingrid"
          sx={{ display: "flex", justifyContent: "center" ,flexWrap:"wrap",paddingRight:"8%" ,marginTop:"5%"}}
        >
          {dashboardData?.cardsData.map((cardItem) => (
            <Grid item xs={4}  md={12/27}>
              <HomeCard data={cardItem} />
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
