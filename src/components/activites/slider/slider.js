import React from "react";
import { Carousel } from 'antd';
import "./slider.css"

import "antd/dist/antd.css";
import Marketing1 from "../marketing1/marketing1";
import Marketing2 from "../marketing2/marketing2";
import Marketing3 from "../marketing3/marketing3";
import Marketing4 from "../marketing4/marketing4";
import Marketing5 from "../marketing5/marketing5";

// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import image from "../../Images/image 4.png"

const contentStyle = {
    // height: '640px',
    lineHeight: '160px',
    textAlign: 'center',
    

  };

const MarketingSlider = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    
    return (
      <div className="mslider">
          <Carousel afterChange={onChange}>
      <div>
        <div className="mlider">
           <Marketing1/>
    
        </div>
      </div>
      <div>
        <div className="mlider">
            <Marketing2/>
    
        </div>
      </div>
      <div>
        <h3 className="mlider">
          <Marketing3/>
        </h3>
      </div>
      <div>
        <h3 className="mlider">
          <Marketing4/>
        </h3>
      </div>
      <div>
        <h3 className="mslider">
          <Marketing5/>
        </h3>
      </div>
    </Carousel>
         
      
      </div>
  );
}


export default MarketingSlider;
