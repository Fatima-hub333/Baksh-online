import React from "react";
import './ceo.css'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ceo from "../../images/ceo.png"

export default function Ceo() {
    return (
      <div className="ceomain">
          
          <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            
        <Grid item xs={12} md={4}>
           <div className="ceo-subdiv">
                <div className="head1">
                    <p>CEO</p>
                </div>
                <div className="head2">
                    <p>MESSAGE</p>
                    </div>
                    </div>
                    <div className="ceomsg">
                        <p>
                            The Standard of Your Living<br/> Depends Upon the Quality of<br/> Your Investments.
                            </p>
                            </div>      
            </Grid>

            <Grid item xs={12} md={8}>
           <div className="ceo-suubdiv2">
            <img className="ceoimg" src={ceo}/>
            <div className="ceomsg2">
            <p>“Our reputation for corporate integrity attracts good team members, great customers,
                 and even greater opportunities. Our business process delivers value and flexible service
                  options. We are strongly devoted to fulfilling the dreams of our customers. We believe 
                  that we are enablers of people’s dreams.”</p>
                  
            <div className="ceoinfo">
            <p className="ceo-name">MOHSIN <br /> ABBAS BAKSH</p>
            <p className="ceo-desg">CEO/FOUNDER</p>
            </div> 
                            </div>
                        </div>    
            </Grid>


            </Grid>
      </Box>
      </div>
      
  );
}



