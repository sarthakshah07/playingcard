// import * as React from "react";
// import PropTypes from "prop-types";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import Button from "@mui/material/Button";
// import { Box } from "@mui/system";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(1),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(20),
//   },
// }));

// function BootstrapDialogTitle(props) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 0,
//             top: 0,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

// export default function Popup({ image, imgtitle, text, popupsx, imagesx }) {
//   const [open, setOpen] = React.useState(true);

//   // const handleClickOpen = () => {
//   //   setOpen(true);
//   // };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const itemData = [
//     {
//       img: image,
//       imgtitle: imgtitle,
//       text: text,
//     },
//   ];
//   // return (
//   //   <div >
//   //     <BootstrapDialog
//   //       onClose={handleClose}
//   //       aria-labelledby="customized-dialog-title"
//   //       open={open}
//   //       sx={popupsx}
//   //     >
//   //       <DialogContent dividers className="dialogmain"  sx={{border:"1px solid red",position:"absolute",top:"30%",left:"30%"}} >
//   //         <ImageList  cols={1} rowHeight={105}  sx={imagesx} >
//   //           {itemData.map((item) => (
//   //             <ImageListItem key={item.img} >
//   //               <img src={item.img} alt={item.imgtitle} loading="lazy" />
//   //             </ImageListItem>
//   //           ))}
//   //         </ImageList>
//   //         <h2 style={{ textAlign: "center" }}>
//   //           You've entered the address of your account
//   //         </h2>
//   //       </DialogContent>
//   //     </BootstrapDialog>
//   //   </div>
//   // );
//   return (
//     <Dialog
//       onClose={handleClose}
//       aria-labelledby="customized-dialog-title"
//       open={open}
//       sx={popupsx}
//     >
//       <Grid container  sx={{width:"1000px"}} >
//         {/* <Grid item>
//           fgh
//         </Grid> */}
//       </Grid>
//       {/* <Box sx={{border:"1px solid black",width:"900px",height:"500px"}}>

//       </Box> */}
//       {/* <DialogContent>
//         <Grid container>
//           <Grid item xs={12} sx={{display:"flex",width:"inherit"}}>
//             <Typography gutterBottom>
//               <Grid item xs={12}>
//                 <ImageList sx={imagesx}>
//                   {itemData.map((item) => (
//                     <img src={item.img} alt={item.imgtitle} loading="lazy" />
//                   ))}
//                 </ImageList>
//               </Grid>
//               <Grid item xs={12}>
//                 Cras mattis consectetur purus sit amet fermentum. Cras justo
//                 odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
//                 risus, porta ac consectetur ac, vestibulum at eros.
//               </Grid>
//             </Typography>
//           </Grid>
//           <Grid item xs={5}>
//             <Typography gutterBottom></Typography>
//           </Grid>
//         </Grid>
//       </DialogContent> */}

//       {/* <DialogActions>
//         <Button autoFocus onClick={handleClose}>
//           Save changes
//         </Button>
//       </DialogActions> */}
//     </Dialog>

//     // </div>
//   );
// }
import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MyButton from "../MyButton";
import Swal from "sweetalert2";
// import Verificationlogo from "../../assets/Images/emailverification.jpg";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(20),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
export default function Popup({ image, imgtitle, text, popupsx,ConfirmClick }) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  }

  const itemData = [
    {
      // img: "D:\nikitaRummyplayingcardsrcassetsimagesemailverification.jpg",
      // title: "verification-image",
      img: image,
      imgtitle: imgtitle,
      text: text,
    },
  ];


  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle > */}
        <Box
          dividers
          className="dialogmain"
          sx={popupsx}
        >
          <Grid container >
            <Grid item  xs={12}>
              <ImageList
                sx={{
                  marginLeft: "20%",
                  height: "250px",
                  width: "60%",
                  display: "flex",
                  justifyContent: "center",
                }}
                // cols={1}
                // rowHeight={385}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img} sx={{ width: "180px" }}>
                    <img src={item.img} alt={item.imgtitle} loading="lazy" />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
            <Grid item  xs={12} textAlign="center">
              <Typography fontSize="30px">
                Want To Choose This Card <span style={{ color: "red" }}>?</span>
              </Typography>
              <Typography sx={{ marginBottom: "30px" }}>
                If you click on confirm then your bid will be placed and{" "}
                <span style={{ color: "red", fontSize: "20px" }}>1$</span> will
                be deducted from your account{" "}
              </Typography>
            </Grid>
            <Grid item  xs={12} sx={{display:"flex",justifyContent:"space-evenly"}}>
              <MyButton
                variant="contained"
                sx={{
                  height: "50px",
                  width: "150px",
                  backgroundColor: "green",
                }}
                handleClick={ConfirmClick}
                title="Confirm"
              />
              <MyButton
                variant="contained"
                sx={{
                  height: "50px",
                  width: "150px",
                  backgroundColor: "red",
                }}
                handleClick={handleClose}
                title="Cancel"
              />
            </Grid>
          </Grid>

          {/* <h2 style={{ textAlign: "center" }}>
            you've entered the address of your account
          </h2> */}
        </Box>
      </BootstrapDialog>
    </div>
  );
}
