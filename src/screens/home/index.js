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
        {/* <Marquee
          speed={200}
          gradientWidth={200}
          gradientColor={[200, 200, 200]}
        >
          <Typography style={{ color: "black" }}>
            <img src={headcardicon} alt=" " />
            Choose Card{" "}
          </Typography>
        </Marquee> */}
        {/* <Grid
          item
          xs={12}
          sx={{
            display: "flex ",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fab
            onClick={() => setShowCards(true)}
            sx={{
              background: "none",
              backgroundColor: "white",
              border: "none",
              borderRadius: "none",
            }}
          >
            <PreviewIcon sx={{ color: "lightseagreen", scale: "2" }} />
          </Fab>

          <br />
          <MyButton
            varient="text"
            size="small"
            title="show cards"
            sx={{ color: "white" }}
            handleClick={() => setShowCards(true)}
          />
        </Grid> */}

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
        >
          {/* <Typography style={{ color: "black" }}>
            <span style={{ fontSize: "20px", color: "red" }}>
              Choose by clicking on Card
            </span>
          </Typography> */}
        </Marquee>
      </Grid>
    </WrapperComponent>
  );
};

export default HomeScreen;
