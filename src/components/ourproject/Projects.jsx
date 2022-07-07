import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import backimg from "../../images/Vector_3.png";
import nextimg from "../../images/Vector_4.png";
import img1 from "../../images/proj-1.png"
import img2 from "../../images/proj-2.png"
import img3 from "../../images/proj-3.png"
import img4 from "../../images/proj-4.png"
import img5 from "../../images/proj-5.png"


const Project = (props) => {
  let slider = null;
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
          },
      ]
  };
    
  const next = () => slider.slickNext();
      
  const  previous = () => slider.slickPrev();
        
  return (
    <>
      <section className="">
        <div className="">
          <div className="project">
                  
            <div className="">
              <Slider {...settings} ref={c => (slider = c)} className="">
                <div className="">
                  <img className="" src={img1} alt="First slide" />
                </div>
                 <div className="">
                  <img className="" src={img2} alt="First slide" />
                </div>
                <div className="">
                  <img className="" src={img3} alt="First slide" />
                </div>
                 <div className="">
                  <img className="" src={img4} alt="First slide" />
                </div>
                 <div className="">
                  <img className="" src={img5} alt="First slide" />
                </div>
              </Slider>
            </div>
          </div>
         </div>
      </section>
     
       
   


      {/* carousel */}
     
      );
    </>
  );
};

export default Project;
