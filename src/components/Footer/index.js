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
        
        }}
      >
        <Grid
          container
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Grid item xs={8} sx={{display:"flex",flexDirection:"column",justifyContent:"right",textAlign:"end"}} >
           
              <Grid container   sx={{display:"flex",justifyContent:"center"}}>
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
              <br/>
              <Grid container  sx={{display:"flex",justifyContent:"right"}}>
               
                <Typography
               
                  sx={{
                    fontFamily:
                      "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif",
                    textAlign: "justify",
                    boxSizing: "inherit",
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
        <Grid
          container
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "baseline",
            pt:6
          }}
        >
          <Grid item xs={8} textAlign="center" display="flex" alignItems="baseline">
            <Grid item xs={6}>
            <Typography
              variant="h4"
              sx={{
                fontFamily:
                  "apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif",
                boxSizing: "inherit",

                fontWeight: "600",
                fontSize: "1.8rem!important;",
                Padding: "1rem 0",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Open Hours
              
            </Typography>
            <br></br>
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
              <br/>
              sat-sun : closed
            </Typography>
            </Grid>
            <Grid item xs={6}>
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
            <br/>
            <FacebookIcon
              sx={{
                width: "20px",
                height: "30px",
                margin: " 0 25px 5px 0",
                scale: "1.65",
              }}
            />
            <TwitterIcon
              sx={{
                width: "20px",
                height: "30px",
                margin: " 0 25px 5px 0",
                scale: "1.65",
              }}
            />
            <InstagramIcon
              sx={{
                width: "20px",
                height: "30px",
                margin: " 0 25px 5px 0",
                scale: "1.65",
              }}
            />
            <YouTubeIcon
              sx={{
                width: "20px",
                height: "30px",
                margin: " 0 25px 5px 0",
                scale: "1.65",
              }}
            />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
