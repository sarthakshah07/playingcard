import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import './_homecard.css';

export default function HomeCard({ data }) {
  return (
    <Card
    className="maincard"
      sx={{
        // boxShadow : "5px 5px 20px 10px gray",
        // padding: "50px",
        // margin:'15px',
        
        // backgroundColor: { xs: "red", sm: "green" },
      }}
    >
      <CardMedia component="img" image={data.url} alt="card" />
    </Card>
  );
}
