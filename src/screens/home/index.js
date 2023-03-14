import { Grid } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";
import HomeCard from "../../components/HomeCard";
import WrapperComponent from "../../components/WrapperComponent";
import { counterSelector } from "../../slice/counter/counterSlice";
import './_home.css'
import headcardicon from '../../assets/images/headcardicon.png'

const HomeScreen = () => {
  const { cardsData } = useSelector(counterSelector);
  const backstyle ={
    backgroundColor:"green"
  
  }
  return (
    <WrapperComponent sx={backstyle}>
      <Marquee
       speed={200} gradientWidth={200} gradientColor={[200,200,200]}><h1 style={{color:"black"}}><img src={headcardicon} alt=" "></img>Choose Card</h1></Marquee>
      <Grid container
        xs={11}
       className="maingrid"
       sx={{display:"flex",justifyContent:"center"}}
        >
      {cardsData.map((cardItem) => (
        <Grid item
        xs={12/27}
        >
        <HomeCard
         data={cardItem} />
        </Grid>
      ))}
      </Grid >
    </WrapperComponent>
  );
};

export default HomeScreen;
