import React from "react";
import './home.css'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import mainicon from "../../images/mainicon1.png" 
import sample from "../../images/HssD.mp4"


export default function Home() {
    return (
      <div className="homemain">
          <video  id="background-video"  className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
          <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            
        <Grid item xs={12} md={6}>
                <div className="headingss1">
                <img className="iconing" src={mainicon}></img>
                    <p>WE VALUE <br /> YOUR <br /> DREAMS</p>
                </div>
            </Grid>

            <Grid item xs={12} md={6}>
                <div className="txts1">
                    <p>Our core mission is to provide the highest caliber<br/>
                    real estate development, management, and<br/> 
                    investment services.</p>
                </div>
            </Grid>
            


            </Grid>
      </Box>
      
      </div>
  );
}



