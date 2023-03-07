import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../../components/HomeCard";
import WrapperComponent from "../../components/WrapperComponent";
import { counterSelector } from "../../slice/counterSlice";
import './_home.css'

const HomeScreen = () => {
  const { cardsData } = useSelector(counterSelector);

  return (
    <WrapperComponent>
      {/* <MyButton
        fullWidth={true}
        title="sign in"
        variant="outlined"
        handleClick={handleSubmit}
      /> */}

      {cardsData.map((cardItem) => (
        <Grid
          item
          className="maingrid"
          xs={12/9}
          // sm={2}
          // md={2}
          // lg={2}
          // xl={2}
        >
          <HomeCard data={cardItem} />
        </Grid>
      ))}
    </WrapperComponent>
  );
};

export default HomeScreen;
