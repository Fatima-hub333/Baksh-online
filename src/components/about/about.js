import React from "react";
import './about.css'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import image from "../Images/image 4.png"
import image from "../../images/image 4.png"


export default function Abouts() {
    
    return (
      <div className="mainabout">
          
          <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            
            <Grid item xs={12} md={6}>
                <div className="headig1"> 
                    <p>
                        ABOUT
                    </p>
                </div>
                <div className="headigs2">
                    <p>
                        BAKSH
                    </p>
                </div>

                <div className="headigs3">
                    <p>
                        Discover more
                    </p>
                </div>
                
                <div className="abttxt">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

            </Grid>

            {/* <Grid item xs={12} md={6}>
                <div className="imghead">
                    <img src={image} className="abtimg" />
                    </div>
            </Grid> */}

            </Grid>
            </Box>
            </div>
    )
}