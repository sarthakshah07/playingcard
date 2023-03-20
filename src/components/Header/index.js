import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { logoutUserAction } from "../../redux/auth/middleware";
import { useDispatch } from "react-redux";
import MyButton from "../MyButton";
import { Backdrop, Divider, Drawer, List, ListItem, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoheader from "../../assets/images/headerlogo.png";
import Swal from "sweetalert2";

const drawerWidth = 240;
const ButtonAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     dispatch(logoutUserAction());
  //     // return;
  //   }

  const handleLogout = () => {
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
        cancelButtonColor: "red"
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            zIndex:1,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Logged out successfully'
          })
          dispatch(logoutUserAction());
          // Swal.fire({
          //   icon: "success",
          //   showConfirmButton: false,
          //   width: 200,
          //   timer: 2000,
          //   timerProgressBar: true,
          //   onClose: {}
          // }).then((res, err) => {
          //   console.log("done", result.isConfirmed);
          //   if (result.isConfirmed) {
          //     // dispatch(logoutUserAction());
          //   }
          // });
        }else{
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            zIndex:1,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'error',
            title: 'Logout unsuccessfull'
          })
         
        }
      })
  
    
   
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCardList = () => {
    navigate("/card");
  };
  const ClickToHome = () => {
    navigate("/");
  };
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  const snack=(
    <Snackbar
    open={open}
    autoHideDuration={6000}
    // onClose={handleClose}
    message="Note archived"
    // action={action}
    />
  )
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
   
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
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
    <Box>
      <AppBar component="nav" style={{ backgroundColor: "lightseagreen",display:"flex",justifyContent:"space-evenly" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
              <img src={logoheader} style={{ height: "70px" }} alt="img"></img>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <MyButton
              size="small"
              title="home"
              variant="text"
              sx={{ color: "black", marginRight: "20px" }}
              handleClick={ClickToHome}
            />
            <MyButton
              size="small"
              title="Card list"
              variant="text"
              sx={{ color: "black", marginRight: "20px" }}
              handleClick={handleCardList}
            />
            <MyButton
              size="small"
              title="logout"
              variant="contained"
              sx={{ color: "black", backgroundColor: "#FAF0CB" }}
              handleClick={handleLogout}
            />
          </Box>
        </Toolbar>
      </AppBar>
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
    </Box>
  );
};

export default ButtonAppBar;
