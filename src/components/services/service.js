import React from "react";
import './service.css'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"; 
import { Divider } from "@mui/material";
// import service from '../../images/our-services.png'
// import service from '../Images/our-services.png'
import icon1 from '../../images/002-call-center.png';
import icon2 from '../../images/001-area.png';
import icon3 from '../../images/004-home.png';
import icon4 from '../../images/005-sale.png';
import icon5 from '../../images/003-briefcase.png';
import icon6 from '../../images/006-update.png';


export default function Service() {
    return (
      <div className="servicemain">
          
          <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            
        <Grid item xs={12} md={6}>

           
                <div className="heading1">
                    <p>OUR</p>
                </div>
                <div className="heading2">
                    <p>SERVICES</p>
                    </div>
                     
            </Grid>

            <Grid item xs={12} md={6}>

           
                <div className="sertxt">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                        sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua.</p>
                </div>
            
            </Grid>

            <Grid item xs={12} md={6}>
                <div className="servicesection">
                <img className="icon" src={icon1} />
                    <p>Real Estate Consultation</p>
                </div> 
            </Grid>

            <Grid item xs={12} md={6}>
                <div className="servicesection1">
                <img className="icon" src={icon2} />
                    <p>Construction Services</p>
                </div>
                
            </Grid>

            <Grid item xs={12} md={6}>
                <div className="servicesection">
                <img className="icon" src={icon3} />
                    <p>Property management</p>
                </div>
                
            </Grid>

            <Grid item xs={12} md={6}>
                <div className="servicesection1">
                <img className="icon" src={icon4} />
                    <p>Buy, Sell nd Rent Properties</p>
                </div>
                
            </Grid>

            <Grid item xs={12} md={6}>
                <div className="servicesection">
                <img className="icon" src={icon5} />
                    <p>Portfolio Management</p>
                </div>
                
            </Grid>

            <Grid item xs={12} md={6}>
                <div className="servicesection1">
                <img className="icon" src={icon6} />
                    <p>Property Adjustment</p>
                </div>
                
            </Grid>


            </Grid>
      </Box>
      </div>
      
  );
}



