/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./leaders.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import leader1 from "../../images/leaders-new-1.png"
import leader2 from "../../images/leaders-new-2.png"
import leader3 from "../../images/leaders-new-3.png"
import leader4 from "../../images/leaders-new-4.png"
import { useState,useEffect } from "react";

export default function Leaders() {

  const [hovered, setHovered] = useState();
  const [hovered2, setHovered2] = useState();
  const [hovered3, setHovered3] = useState();
  const [hovered4, setHovered4] = useState();

  
  return (
    <div className="leadermain">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
             <Grid item xs={12} md={3}>
                <div className="leaders">
                    <img  
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)} 
                    className="limg" src={leader1}></img>
                    </div>
                    <div>
                      
              <p className="ldname" id="left-settings-1">ch. mehmood akhter</p>
              <p className="ldpos" id="left-1">DIRECTOR OPERATIONS</p>
            </div>
            {
              hovered && (
                <div className="ltext" >
                 <p>
                    Lorem ipsum dolor sit amet, consectetur<br/>
                    adipiscing elit, sed do eiusmod tempor <br/>
                    incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              )
            }
           
                    </Grid>
                    <Grid item xs={12} md={3}>
                <div className="leaders">
                    <img  
                    onMouseEnter={() => setHovered2(true)} 
                    onMouseLeave={() => setHovered2(false)}
                    className="limg" src={leader2}></img>
                    </div>
                    <div>
                      
              <p className="ldname" id="idnm">Zia Ullah Abbasi </p>
              <p className="ldpos" id="left-1">DIRECTOR COMPANY AFFAIRS</p>
            </div>
            {
              hovered2 && (
                <div className="ltext" >
                <p>
                    Lorem ipsum dolor sit amet, consectetur<br/>
                    adipiscing elit, sed do eiusmod tempor <br/>
                    incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              )
            }
                    </Grid>
                    <Grid item xs={12} md={3}>
                <div className="leaders">
                    <img 
                     onMouseEnter={() => setHovered3(true)} 
                     onMouseLeave={() => setHovered3(false)}
                    className="limg" src={leader3}></img>
                    </div>
                    <div>
                      
              <p className="ldname" id="left-settings-2">Sheikh Hassan Shakoor</p>
              <p className="ldpos" id="left-3">DIRECTOR PUBLIC RELATIONS</p>
            </div>
            {
              hovered3 && (
                <div className="ltext" >
                <p>
                    Lorem ipsum dolor sit amet, consectetur<br/>
                    adipiscing elit, sed do eiusmod tempor <br/>
                    incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              )
            }
                    </Grid>
                    <Grid item xs={12} md={3}>
                <div className="leaders">
                    <img 
                     onMouseEnter={() => setHovered4(true)} 
                     onMouseLeave={() => setHovered4(false)}
                    className="limg" src={leader4}></img>
                    </div>
                    <div>
                      
              <p className="ldname" id="left-settings-3">Dr. Muhammad Umar</p>
              <p className="ldpos" id="left-1">MARKETING CONSULTANT</p>
            </div>
            {
              hovered4 && (
                <div className="ltext" >
                 <p>
                    Lorem ipsum dolor sit amet, consectetur<br/>
                    adipiscing elit, sed do eiusmod tempor <br/>
                    incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              )
            }
                    </Grid>

          </Grid>
          </Box>
          </div>

)
  }