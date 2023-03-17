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
import { Divider, Drawer, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";



const drawerWidth = 240;
const ButtonAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate =useNavigate()
  
  const handleLogout = () => {
    dispatch(logoutUserAction());
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCardList =()=>{
    navigate("/card")
  }
  const ClickToHome =()=>{
    navigate("/")
  }
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center",display:"flex",flexDirection:"column",justifyContent:"center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem sx={{pt:5}}>
        <MyButton
                    size="small"
                    title="logout"
                    variant="text"
                    sx={{color:"black",backgroundColor:"#FAF0CB"}}
                    handleClick={handleLogout}
                  />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box>
      <AppBar component="nav" style={{backgroundColor:"lightseagreen"}}>
        <Toolbar >
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
            MUI
          </Typography>
          <Typography>
            <MyButton
              size="small"
              title="home"
              variant="text"
              sx={{ color: "black",marginRight:"20px" }}
              handleClick={ClickToHome}
            />
          <MyButton
              size="small"
              title="Card list"
              variant="text"
              sx={{ color: "black",marginRight:"20px" }}
              handleClick={handleCardList}
            />
          </Typography>
          
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
