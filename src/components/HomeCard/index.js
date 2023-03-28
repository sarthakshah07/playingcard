import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./_homecard.css";

import "react-toastify/dist/ReactToastify.css";
import { Box, Skeleton } from "@mui/material";
import Popup from "../Popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function HomeCard({ data, showCards ,cardImg}) {
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();

  const clickable = () => {
    // console.log("sdhf", data);
    // const url = data.url;
    setOpenPopup(true);
  };
  const ConfirmClick = () => {
    navigate("card", {
      state: {
        data: data,
      },
    });
  };
  return (
    <>
          <CardMedia component="img" image={data.url} alt="card" style={cardImg} className="imgcard" onClick={clickable}  />
          {openPopup && (
            <Popup
              data={data}
              image={data.url}
              popupsx={{
                height: "500px",
                width: "600px",
                backgroundColor: "#c7c7c7",
              }}
              ConfirmClick={ConfirmClick}
              imagesx={{ width: "100%", height: "720px", ml: 1.5 }}
              imgtitle="  No Image"
            />
          )}
    </>
  );
}
