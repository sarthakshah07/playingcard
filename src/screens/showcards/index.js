import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import WrapperComponent from "../../components/WrapperComponent";

import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dashboardSelector } from "../../redux/dashboard/dashboardSlice";
import { useEffect, useState } from "react";
import { cardListAction } from "../../redux/dashboard/middleware";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTimer } from "react-timer-hook";

import Timer from "../../components/timer";
import MyButton from "../../components/MyButton";
import { useLocation, useNavigate } from "react-router-dom";
import "./_showcard.css";
import Swal from "sweetalert2";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <div>
      <div style={{ fontSize: "70px" }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}
const ShowCards = ({ state }) => {
  const navigate = useNavigate();
  const userCardList = useSelector(dashboardSelector);
  const dispatch = useDispatch();
  const location = useLocation();
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    dispatch(cardListAction());
  }, []);
  const time = new Date();
  // time.setMinutes(1464);
  const current = new Date();
  const TommorowDate = `${current.getDate() + 1}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const tommorrow = new Date(TommorowDate + 1);
  const NavigateOnHome = () => {
    Swal.fire({
      title: "Are You Sure ?",
      color: "#000",
      text: "Want to change this card",
      icon: "question",
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: "Custom image",
      width: 600,
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "green",
      cancelButtonText: `No`,
      cancelButtonColor: "red",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };
  const cardImg = location.state;

  return (
    <WrapperComponent isHeader>
      <Grid
        container
        component={Paper}
        style={{ width: "100%", marginTop: "5%" }}
      >
        <Grid item xs={10} sx={{ marginLeft: "10%" }}>
          {cardImg && (
            <Card sx={{ minWidth: 275, boxShadow: "1px 1px 20px 20px gray" }}>
              <CardContent>
                <Grid item xs={12} sx={{ display: "flex" }}>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      flexDirection: "column-reverse",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={cardImg.data.url}
                      alt="no "
                      style={{ height: "280px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontVariant: "small-caps",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Time Left:
                      <Timer TommorowDate={TommorowDate} />
                    </Typography>
                    <br />
                    <Typography
                      sx={{
                        mt: 3,
                        fontVariant: "small-caps",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Tommorrow's date : {TommorowDate}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <Grid item sx={{ marginLeft: "49.5%" }}>
                <CardActions>
                  <MyButton
                    className="changeCard"
                    size="small"
                    title="Change Card"
                    variant="contained"
                    handleClick={NavigateOnHome}
                  />
                </CardActions>
              </Grid>
            </Card>
          )}
        </Grid>
      </Grid>
      <Grid
        container
        component={Paper}
        style={{ width: "100%", marginTop: "2%" }}
      >
        <Grid item xs={10} sx={{ marginLeft: "10%" }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ fontSize: "30px" }}>
                  Id
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontSize: "30px" }}>
                  Date
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontSize: "30px" }}>
                status
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontSize: "30px" }}>
                  UserCard
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontSize: "30px" }}>
                  BidCard
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontSize: "30px" }}>
               
               
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userCardList.cardListData.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    className="tablerow"
                  >
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  <StyledTableCell>
                    <Typography
                      sx={{
                        backgroundColor:
                          row.bidOpen === "true" ? "green" : "red",
                        float: "right",
                        textAlign: "center",
                        width: "25%",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "15px",
                      }}
                    >
                      {" "}
                      {row.bidOpen === "true" ? "won" : "lost"}
                    </Typography>
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <img src={row.url} style={{ height: "90px" }} alt=""></img>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </WrapperComponent>
  );
};
export default ShowCards;
