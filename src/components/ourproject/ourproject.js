 
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ourproject.css';

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"; 

import backimg from "../../images/Vector_3.png";
import nextimg from "../../images/Vector_4.png";
import img1 from "../../images/proj-1.png"
import img2 from "../../images/proj-1.png"
import img3 from "../../images/proj-3.png"
import img4 from "../../images/proj-4.png"
import img5 from "../../images/proj-5.png"

const Projects = (props) => {
  let slider = null;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const next = () => slider.slickNext();

  const previous = () => slider.slickPrev();

  return (
    <>
      <section className="project__section">
        <div className="container">
          <div className="project__content">
          <Grid container spacing={2}>

        <Grid item xs={12} md={4}>
                <div className="headin1">
                    <p>OUR</p>
                </div>
                <div className="headin1">
                    <p>Projects</p>
                </div>
            </Grid>

            <Grid item xs={12} md={4}>
                <div className="protxt">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </Grid>
            
            <Grid item xs={12} md={4}>
            <div className="disc">
                    <p>
                        Discover more
                    </p>
                </div>
            </Grid>


            {/* <div className="__explain">
              <h2 className="our">
                OUR
                {' '}
                <span className="text-small text-yellow">VALUABLE UPCOMING</span>
              </h2>
              <h2 className="pro">PROJECTS</h2>
              <p className="parap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                ipsam. Expedita quis cupiditate sunt, placeat incidunt odit
                deserunt assumenda voluptas.
              </p>
              <button className="Btn" onClick={previous}><img src={backimg} /></button>
              <button className="Btn" onClick={next}><img src={nextimg} /></button>

            </div> */}
          {/* <Box sx={{ flexGrow: 1 }}> */}
        

         <Grid item xs={12} md={12}>
         <div className="__carousel">
              <Slider {...settings} ref={(c) => (slider = c)} className="__projects">
                <div className="__project">
                <div className='projtxt' >                
                <p className="slidetxtt" >
                  AVENIR<br/>
                  Food Outlets<br/>
                  Size 8000 sqft<br/>
                  Location<br/>
                  bahria town islamabad<br/>
                  status<br/>
                  coming soon<br/>
                  </p>
                  </div>
              
                  <img className="d-block w-100" src={img1} alt="First slide" />
                </div>
                <div className="__project">
                <div className='projtxt' >                
                <p className="slidetxtt" >
                  AVENIR<br/>
                  Food Outlets<br/>
                  Size 8000 sqft<br/>
                  Location<br/>
                  bahria town islamabad<br/>
                  status<br/>
                  coming soon<br/>
                  </p>
                  </div>
                  <img className="d-block w-100" src={img2} alt="First slide" />
                </div>

                <div className="__project">
                <div className='projtxt'>                
                <p className="slidetxtt" >
                  AVENIR<br/>
                  Food Outlets<br/>
                  Size 8000 sqft<br/>
                  Location<br/>
                  bahria town islamabad<br/>
                  status<br/>
                  coming soon<br/>
                  </p>
                  </div>
                  <img className="d-block w-100" src={img3} alt="First slide" />
                </div>
                <div className="__project">
                <div className='projtxt'>                
                <p className="slidetxtt" >
                  AVENIR<br/>
                  Food Outlets<br/>
                  Size 8000 sqft<br/>
                  Location<br/>
                  bahria town islamabad<br/>
                  status<br/>
                  coming soon<br/>
                  </p>
                  </div>
                  <img className="d-block w-100" src={img4} alt="First slide" />
                </div>
                <div className="__project">
                <div className='projtxt'>                
                <p className="slidetxtt" >
                  AVENIR<br/>
                  Food Outlets<br/>
                  Size 8000 sqft<br/>
                  Location<br/>
                  bahria town islamabad<br/>
                  status<br/>
                  coming soon<br/>
                  </p>
                  <img className="d-block w-100" src={img2} alt="First slide" />
                  </div>
                  <img className="d-block w-100" src={img5} alt="First slide" />
                </div>
              </Slider>
            </div>
         </Grid>
         </Grid>
         {/* </Box> */}
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
