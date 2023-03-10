import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./_homecard.css";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

export default function HomeCard({ data }) {
  const clickable = () => {
    console.log("clickable", data);
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
      cancelButtonColor: "red",
      // preConfirm:"true",
      // showLoader:true
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log("succes", data);
        Swal.fire({
          icon: "success",
          title: "Card have been selected",
          text: "Api sent",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      }
    });
  };
  return (
    <Card className="maincard" onClick={clickable}>
      <CardMedia component="img" image={data.url} alt="card" />
    </Card>
  );
}
