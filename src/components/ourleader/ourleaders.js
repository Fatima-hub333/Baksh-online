import React from "react";
// import './ourleaders.css'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import leader from '../Images/leaders.png'
import leader from "../../images/leaders.png"



export default function Ourleader() {

    
    return (
      <div className="ourleadermain">
          
          <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

        <Grid item xs={12} md={5}>
                <div className="head1">
                    <p>OUR </p>
                </div>
                <div className="head2">
                    <p>LEADERS</p>
                </div>
            </Grid>

            <Grid item xs={12} md={7}>
                <div className="leadinfo">
                    <div>
                <img className="imgl" src={leader}></img>
                    </div>
                <div className="leaddata">
                <p className="leadname">Mohsin Abbas Baksh</p>
                    <p className="leadposition">CEO/Founder</p>
                    <p className="leadtxt">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed <br/>
                    do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.</p>
                </div>
                </div>
            </Grid>          

            </Grid>
      </Box>
      
      </div>
  );
}



