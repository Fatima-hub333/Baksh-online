/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './topbar.css'
import { useState } from "react";
import DrawerComponent from "./drawer";
import { HiMenu } from 'react-icons/hi'
import logo from "../../images/New-logo.png"

import {
    useTheme,
    useMediaQuery,
  } from "@material-ui/core";


const Topbar = () => {
    const [state, setState] = useState(false)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    // var isMobile = window.matchMedia("(max-width: 700px)")

  return (
    <>
      {/* nav start */}
      <div className="header">
      <div className="icon">
        <img src={logo} className="logo" alt="" />
        <span className="num">UAN (051)-111 789 111</span>
        </div>
        {isMobile ? (
          <DrawerComponent />
        ) : (
        <div className="nav">
            <ul>
                <li>
                      <a className="" href="#">about</a>
                  </li>
                  
                  <li>
                    <a className="" href="#">projects</a>
                  </li>
                  
                  <li>
                    <a className="n" href="#">events</a>
                  </li>           
               

                    <button className="topbtn">
                    sign in
                  </button>
            
                  
                  <HiMenu className="menu" />
                        
                </ul>
             
            </div>
        )
}
            </div>
      </>
  );
};

export default Topbar;
