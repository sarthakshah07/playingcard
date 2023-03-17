// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import WrapperComponent from "../../components/WrapperComponent";
import { userData } from "../../mock-data/usercard";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dashboardSelector } from "../../redux/dashboard/dashboardSlice";
import { useEffect } from "react";
import { cardListAction } from "../../redux/dashboard/middleware";

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

const ShowCards = () => {
  const userCardList = useSelector(dashboardSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardListAction());
  }, []);

  return (
    <WrapperComponent isHeader>
      <Grid
        container
        component={Paper}
        style={{ width: "100%", marginTop: "5%" }}
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
                  UserCard
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userCardList.cardListData.map((row) => (
                <StyledTableRow key={row.id} >
                  <StyledTableCell component="th" scope="row" className="tablerow">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
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
