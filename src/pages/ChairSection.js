import React from "react";
import ".././components/Constant/ChairData";
import { ChairData } from ".././components/Constant/ChairData";
import plus from "../assets/images/Vector.svg";
import aero from "../assets/images/orange_aero.svg";
import Slider from "react-slick";
import "./chairSection.scss";
import fiveStar from '../assets/images/5Star.svg'

const ChairSection = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="chair container">
      <div className=" card-Chair">
        <Slider {...settings}>
          {ChairData.map((chair) => (
            <div className=" pt-5 ">
              <div className="chairCard mx-xl-3">
                <div className="chair_img">
                  <img className="imgs" src={chair.url} alt="" />
                </div>
                <div className="text_area ">
                  <div className="sub">Chair</div>
                  <div className="names">{chair.name}</div>
                  <div className="star"> <img src={fiveStar} alt="" /></div>
             
                    <div className="price d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <span className="dollar me-1">$</span>
                        {chair.price}
                      </div>
                      <img src={plus} className="plus" alt="" />
                    </div>

                    <div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <div className="aero">
          View All <img src={aero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChairSection;
