import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <Grid
        container
        className="footercontainer"
        sx={{
          minHeight: "350px",
          bottom: "350px",
          color: "#fff",
          marginTop:4
        }}
        justifyContent="center"
      >
        <Grid container md={8} marginTop={5}>
          <Grid item md={6} justifyContent="flex-end">
            <Grid container justifyContent="center">
              <Typography
                variant="h4"
                sx={{
                  fontFamily:
                    "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif",
                  boxSizing: "inherit",
                  fontWeight: "600",
                  fontSize: "1.8rem!important;",
                  Padding: "1rem",
                }}
              >
                More About Game
              </Typography>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item md={8} xs={10}>
                <Typography
                  sx={{
                    fontFamily:
                      "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif",
                    textAlign: "left",
                    boxSizing: "inherit",
                    marginTop: 3,
                  }}
                >
                  card game, game played for pleasure or gambling (or both) with
                  one or more decks of playing cards. Games using playing cards
                  exploit the fact that cards are individually identifiable from
                  one side only, so that each player knows only the cards he
                  holds and not those held by anyone else.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid container>
              <Grid item md={6} xs={12}>
                <Grid container>
                  <Grid item md={12} xs={12}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily:
                          "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif",
                        boxSizing: "inherit",
                        fontWeight: "600",
                        fontSize: "1.8rem!important;",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      Open Hours
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={12}
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        whiteSpace: "normal",
                        variant: "h4",
                        fontFamily:
                          "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serifi",
                        boxSizing: "inherit",
                      }}
                    >
                      mon-fri: 9.00 PM
                      <br />
                      sat-sun : closed
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6} xs={12} >
                <Grid container
                justifyContent="end"
              >
                  <Grid
                    item
                    md={12}
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily:
                          "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif",
                        Color: "#008080",
                        boxSizing: "inherit",
                        fontWeight: "600",
                        fontSize: "1.8rem!important;",
                        Padding: "1rem 0",
                      }}
                    >
                      Keep Connected
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={10}
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Grid container >
                      <Grid
                        item
                        md={3}
                        xs={3}   sx={{
                          display: "flex",
                          justifyContent: "right",
                          alignItems: "center",
                           paddingTop: { sm: 3, xs: 2 },
                        }}
                      >
                        <FacebookIcon
                          sx={{
                            scale: "1.65",
                            marginRight: "40px",
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={3}
                        xs={3}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                         paddingTop: { sm: 3, xs: 2 },
                        }}
                      >
                        <TwitterIcon
                          sx={{
                            scale: "1.65",
                            marginRight: "40px",
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={3}
                        xs={3}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingTop: { sm: 3, xs: 2 },
                        }}
                      >
                        <InstagramIcon
                          sx={{
                            scale: "1.65",
                            marginRight: "40px",
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={3}
                        xs={3}
                        sx={{
                          display: "flex",
                          justifyContent: "left",
                          alignItems: "center",
                           paddingTop: { sm: 3, xs: 1 },
                        }}
                      >
                        <YouTubeIcon
                          sx={{
                            scale: "1.65",
                            marginRight: "40px",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;