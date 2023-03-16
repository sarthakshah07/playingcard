import { Grid, Typography } from '@mui/material'
import React from 'react'
import WrapperComponent from '../../components/WrapperComponent'
import './pagenotfound.css'
import  video from "../../assets/videos/404vid.mp4"

function PageNotFound() {
  return (
    <WrapperComponent>
      <Grid container border={1} className="pagenotfoundcontainer" sx={{height:"100vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
        {/* <Grid item border={1} sx={{width:"30%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}> */}
        <Typography className='heading'> Page Not Found</Typography>
        <video 
        //  autoPlay
        style={{position:"absolute", width:"90%"}}
         loop
         muted
         >
          <source  
          src={video}
          type="video/mp4">
          </source>
        </video>
      {/* </Typography> */}
        {/* </Grid> */}
      </Grid>
      
    </WrapperComponent>
  )
}

export default PageNotFound