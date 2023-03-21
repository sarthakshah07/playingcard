import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./_homecard.css";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { Box, Skeleton } from "@mui/material";
import Popup from "../Popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeCard({ data, showCards }) {
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();

  const clickable = () => {
    console.log("sdhf", data);
    const url = data.url;
    setOpenPopup(true);
  };
  const ConfirmClick = () => {
    console.log("confirm");
    navigate("card", {
      state: {
        data: data,
      },
    });
  };
  return (
    <>
      {showCards ? (
        <Card className="maincard" onClick={clickable}>
          <CardMedia component="img" image={data.url} alt="card" />
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
        </Card>
      ) : (
        <Box sx={{ width: 300 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      )}
    </>
  );
}
