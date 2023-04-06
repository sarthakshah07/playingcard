import React, { useEffect, useState } from "react";
import { Fab, Grid, Skeleton, Switch, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
// import HomeCard from "../../components/HomeCard";
import WrapperComponent from "../../components/WrapperComponent";
// import headcardicon from "../../assets/images/headcardicon.png";
import { dashboardSelector } from "../../redux/dashboard/dashboardSlice";
import { fetchCardAction } from "../../redux/dashboard/middleware";
import "./_home.css";
// import MyButton from "../../components/MyButton";
// import PreviewIcon from "@mui/icons-material/Preview";
import Slider from "../../components/Slider/index";
import Footer from "../../components/Footer";

const HomeScreen = () => {
  const [showCards, setShowCards] = useState(false);
  const dashboardData = useSelector(dashboardSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCardAction());
  }, []);

  // console.log("dashbr",dashboardData);
  // console.log("dashbr2",dashboardData.cardsData);

  return (
    <WrapperComponent isHeader>
      <Grid
        container
        sx={{
          minHeight: "94vh",
          maxWidth: "100%",
          marginTop: "81px",
          paddingTop: "1%",
        }}
        xs={8}
        md={12}
      >
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={4}>
            <Grid item xs={9}>
              <Slider
                data={dashboardData?.cardsData?.find(
                  (item) => item.name === "heartscard"
                )}
                showCards={showCards}
              />
            </Grid>
            <Grid item xs={9}>
              <Slider
                data={dashboardData?.cardsData?.find(
                  (item) => item.name === "clubscard"
                )}
                showCards={showCards}
              />
            </Grid>
            <Grid item xs={9}>
              <Slider
                data={dashboardData?.cardsData?.find(
                  (item) => item.name === "joker"
                )}
                showCards={showCards}
                isTrue
              />
            </Grid>

            <Grid item xs={9}>
              <Slider
                data={dashboardData?.cardsData?.find(
                  (item) => item.name === "diamondscard"
                )}
                showCards={showCards}
              />
            </Grid>

            <Grid item xs={9}>
              <Slider
                data={dashboardData?.cardsData?.find(
                  (item) => item.name === "spadescard"
                )}
                showCards={showCards}
              />
            </Grid>
          </Grid>
        </Grid>

        <Marquee
          speed={200}
          gradientWidth={200}
          gradientColor={[200, 200, 200]}
        ></Marquee>
      </Grid>
      <br/>
      <Footer/>
    </WrapperComponent>
  );
};

export default HomeScreen;
