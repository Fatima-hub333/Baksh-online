import React from "react";
import './marketing3.css';
import "antd/dist/antd.css";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import image from "../../Images/allimg3.png"
import image from "../../../images/allimg3.png"

// import image from "../../Images/_INK9611 1.png"


const Marketing3 = () => {
    
    return (
      <div className="marketing1">
        <Grid container spacing={2} >
            
            <Grid item xs={12} md={6}>
                <div className="mrktdiv1">
                <img className="mrktslide1" src={image} />
                </div>

            </Grid>
            
            <Grid item xs={12} md={6}>
                <div className="mrktdiv2">
                    <div className="mkttxt1">
                        <p>
                        Our Activities 
                        </p>
                        </div>
                        <div className="mkttxt2">
                        <p>
                    Digital Marketing Consortium
                        </p>
                        </div>
                        <div className="mkttxt3">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="mkttxt4">
                Learn More  &nbsp; &nbsp;    --
                </div>

                </div>
                {/* <div className="mktdiv2">
                <div className="titlem">
                    Our Activities
                </div>
                < div className="titlem2">
                    Digital Marketing Consortium
                </div>
               

                <div className="textm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                 <div className="learnbtn">
                Learn More  &nbsp; &nbsp;    --
                </div> */}
            </Grid>
            
            </Grid>
            </div>
  );
}


export default Marketing3;
