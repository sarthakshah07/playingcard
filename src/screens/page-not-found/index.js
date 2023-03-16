import { Grid, Typography } from '@mui/material'
import React from 'react'
import WrapperComponent from '../../components/WrapperComponent'
import './pagenotfound.css'
import  video from "../../assets/videos/404vid.mp4"

function PageNotFound() {
  return (
    <WrapperComponent>
      <Grid container border={1} className="pagenotfoundcontainer" sx={{height:"100vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Grid item border={1} sx={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Typography>
        <video 
        //  autoPlay
         loop
         muted
         width="100%" height="90%"
        //  poster="https://assets.codepen.io/6093409/river.jpg"
         >
          <source  
          src={video}
          type="video/mp4">
          </source>
        </video>
      </Typography>
        </Grid>
      </Grid>
      
    </WrapperComponent>
  )
}

export default PageNotFound