import React from "react";
import Slider from "react-slick";
import HomeCard from "../HomeCard";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./_Slider.css";

const index = ({ data, showCards }) => {
  const settings = {
    dots: false,
    speed: 800,
    infinite: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    nextArrow: <KeyboardDoubleArrowRightIcon />,
    prevArrow: <KeyboardDoubleArrowLeftIcon />,
  };

  return (
    <Slider {...settings}>
      {data?.data.map((row, index) => (
        <HomeCard
          showCards={showCards}
          data={row}
        />
      ))}
    </Slider>
  );
};

export default index;
