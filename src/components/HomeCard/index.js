import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./_homecard.css";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { Box, Skeleton, Stack } from "@mui/material";

export default function HomeCard({ data,showCards }) {
  
  const clickable = () => {
    Swal.fire({
      title: "Want To Choose This Card?",
      color: "#000",
      text: "Try Your Luck",
      icon: "question",
      width: 600,
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "green",
      cancelButtonText: `No`,
      cancelButtonColor: "red"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Card have been selected",
          text: "Api sent",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then((res, err) => {
          console.log("done", result.isConfirmed);
          if (result.isConfirmed) {
          }
        });
      }
    });
  };
  return (
  <>        
    {showCards ?
          (
            <Card className="maincard" onClick={clickable}>
            <CardMedia component="img" image={data.url} alt="card" />
            </Card>
           ):(
            <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
          )
    }
  </>
  );
}
