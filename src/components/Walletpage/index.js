import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardHeader, Divider } from "@mui/material";
import MyButton from "../MyButton";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(Id, Amount, Status) {
  return { Id, Amount, Status };
}

const rows = [
  createData(1, 159, "Successful"),
  createData(2, 237, " Successful"),
  createData(3, 262, "Unsuccessful"),
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Wallet() {
  const options = ["Option 1", "Option 2"];
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid
      container
      height="100vh"
      border="1px solid red"
      bgcolor="#31996A"
      justifyContent="center"
      alignItems="center"
      marginTop={5}
    >
      <Grid xs={12} md={3} sx={{height:{sm:"80vh",xs:"100%"}}} justifyContent="center">
        <Card
          sx={{
            // minWidth: 20,
            height: "100%", 
            // width: "100%",
            justifyContent: "center",
            borderRadius: "25px",
            boxShadow: "20",
          }}
        >
          <CardContent>
            {/* <Typography
              variant="h4"
              justifyContent="center"
              alignItems="center"
              sx={{ backgroundColor: "grey" ,textAlign:"center", Merge:"7%"}}
            >
              Total Balance
            </Typography > */}
            <Grid xs={12} item justifyContent="center" textAlign="center">
              <CardHeader title="Total Balance" />
              <Typography sx={{ fontWeight: "900" }} variant="body2">
                100rs
              </Typography>
              <br />
              <Divider />
            </Grid>
            <Grid marginTop={2} xs={12} item>
              <Typography sx={{ fontWeight: "600" }} variant="body2">
                Amount Added
              </Typography>
              <Typography sx={{ fontWeight: "500", mb: "2%" }} variant="body2">
                100rs
              </Typography>
              <Divider />
            </Grid>
            <Grid marginTop={2} xs={12} display={"flex"} item>
              <Typography
                sx={{ fontWeight: "600", mt: "2%", mr: "30%" }}
                variant="body2"
              >
                Winnings
              </Typography>
              <MyButton
                className="Slogin"
                fullWidth={false}
                title="Instant Withdraw"
                // handleClick={Navigatetologin}
                variant="outlined"
                sx={{ width: "12vw", alignItems: "left" }}
              />
            </Grid>
            <Grid xs={12} item>
              <Typography sx={{ fontWeight: "500", mb: "2%" }} variant="body2">
                100rs
              </Typography>
              <Divider />
            </Grid>
            <Grid xs={12} marginTop={"2%"} item>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Manage Payment</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MyButton
                    className="cardpayment"
                    fullWidth={true}
                    title="Debit/Credit card"
                    variant="text"
                    type="submit"
                    sx={{
                      width: "100%",
                      maxHeight: "100px",
                      // marginLeft: "10%",
                      // backgroundColor: "#363a3e",
                    }}
                  />
                </AccordionDetails>
              </Accordion>
              <Grid xs={12} marginTop={"1%"} item>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>Recent transactions</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* <TableContainer component={Paper}> */}
                    <Table sx={{ minWidth: 150 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Id</TableCell>
                          <TableCell align="right">Amount</TableCell>
                          <TableCell align="right">Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.Id}
                            </TableCell>
                            <TableCell align="right">{row.Amount}</TableCell>
                            <TableCell align="right">{row.Status}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    {/* </TableContainer> */}
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
            <Grid item xs={12} border={1}  >
              <MyButton
                className="signup"
                fullWidth={false}
                title="Add Cash"
                variant="contained"
                type="submit"
                sx={{
                  position:"absolute",
                  top:{sm:"90%",xs:"87%"},
                  right:{sm:"47%",xs:"40%"},
                  // right:"47%",
                  // width: "100%",
                  // marginLeft: "10%",
                  backgroundColor: "#363a3e",
                }}
              />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}