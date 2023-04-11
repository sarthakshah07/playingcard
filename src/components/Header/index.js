import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { logoutUserAction } from "../../redux/auth/middleware";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useDispatch, useSelector } from "react-redux";
import MyButton from "../MyButton";
import Account from "../Account/index";

import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  Snackbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoheader from "../../assets/images/cardlogo1.jpg";
import logoheader2 from "../../assets/images/logoheader.png";
import Swal from "sweetalert2";
import { authSelector } from "../../redux/auth/authSlice";

const drawerWidth = 240;
const ButtonAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector(authSelector);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCardList = () => {
    navigate("/card");
  };
  const ClickToHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    console.log("log");
    Swal.fire({
      title: "Are You Sure?",
      color: "#000",
      text: "Want to logout !",
      icon: "question",
      width: 600,
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "green",
      cancelButtonText: `No`,
      cancelButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          zIndex: 1,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logged out successfully",
        });
        dispatch(logoutUserAction());
        navigate("/");
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          zIndex: 1,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "error",
          title: "Logout unsuccessfull",
        });
      }
    });
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginLeft: "15px",
          color: "black",
          fontFamily:
            "-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif",
        }}
      >
        Card Login
      </Typography>
      <Divider />
      <List>
        <ListItem sx={{ pt: 5 }}>
          <MyButton
            size="small"
            title="home"
            variant="text"
            sx={{ color: "black", marginRight: "20px" }}
            handleClick={ClickToHome}
          />
        </ListItem>
        <ListItem>
          <MyButton
            size="small"
            title="Card list"
            variant="text"
            sx={{ color: "black", marginRight: "20px" }}
            handleClick={handleCardList}
          />
        </ListItem>
        <ListItem>
          <MyButton
            size="small"
            title="logout"
            variant="contained"
            sx={{ color: "black", backgroundColor: "#FAF0CB" }}
            handleClick={handleLogout}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Grid container justifyContent="center" bgcolor="#31996A">
      <Grid item sm={8} xs={12}>
        <Toolbar>
          <Grid
            container
            sx={{
              display: {
                sm: "none",
                xs: "flex",
                justifyContent: "space-evenly",
              },
            }}
          >
            <Grid item  xs={4}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={8}>
            <Typography variant="h4" sx={{ color: "white" }}>
                Card Login
              </Typography>
            </Grid>
           
              
           
          </Grid>
           <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 2,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              margin:1
            }}
          >
            <img src={logoheader2} style={{height:"70px"}} alt="img"></img>
            <Typography
              variant="h4"
              sx={{
                marginLeft: "15px",
                color: "white",
                fontFamily:
                  "-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif",
              }}
            >
              Card Login
            </Typography>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <MyButton
              size="small"
              title="home"
              variant="text"
              sx={{ color: "white", marginRight: "20px" }}
              handleClick={ClickToHome}
            />
            <MyButton
              size="small"
              title="Card list"
              variant="text"
              sx={{ color: "white", marginRight: "20px" }}
              handleClick={handleCardList}
            />
            {
              authState?.currentUser?
              <Account />
              :
              <MyButton title="lOGIN" variant="text" sx={{color:"white"}} handleClick={()=>navigate("/login")}/>
            }
            
          </Box>
        </Toolbar>
      
        <Box component="nav">
        <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
       
      </Grid>
    </Grid>
  );   
};

export default ButtonAppBar;
