import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import HomeCard from "../../components/HomeCard";
import WrapperComponent from "../../components/WrapperComponent";
import "./_home.css";
import headcardicon from "../../assets/images/headcardicon.png";
import { dashboardSelector } from "../../redux/dashboard/dashboardSlice";
import { fetchCardAction } from "../../redux/dashboard/middleware";

const HomeScreen = () => {
  const dashboardData = useSelector(dashboardSelector);
  const dispatch = useDispatch();
  const backstyle = {
    backgroundColor: "green",
  };

  useEffect(() => {
    dispatch(fetchCardAction());
  }, []);

  return (
    <WrapperComponent sx={backstyle}>
      <Marquee speed={200} gradientWidth={200} gradientColor={[200, 200, 200]}>
        <h1 style={{ color: "black" }}>
          <img src={headcardicon} alt=" "></img>Choose Card{" "}
        </h1>
      </Marquee>
      <Grid
        container
        xs={11}
        className="maingrid"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {dashboardData?.cardsData.map((cardItem) => (
          <Grid item xs={12 / 27}>
            <HomeCard data={cardItem} />
          </Grid>
        ))}
      </Grid>
      <Marquee speed={200} gradientWidth={200} gradientColor={[200, 200, 200]}>
        <h1 style={{ color: "black" }}>
          <span style={{ fontSize: "20px", color: "red" }}>
            Choose by clicking on Card
          </span>
        </h1>
      </Marquee>
    </WrapperComponent>
  );
};

export default HomeScreen;
