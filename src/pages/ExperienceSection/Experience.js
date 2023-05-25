import React from "react";
import "./experience.scss";
import aero from "../../assets/images/orange_aero.svg";
import groupImage from '../../assets/images/experience_groupImage.svg'

const Experience = () => {
  return (
    <div className="experience container-fluid ps-0 pe-0">
      <div className="row text-xl-start text-lg-center text-md-center text-sm-center me-0">
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 img_class text-start ">

          <img src={groupImage} className="groupImage" alt="" />
        </div>
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 text_class  ">
          <div className="experiences">EXPERIENCES</div>
          <div className="title">we provide you the best experience</div>
          <div className="detail">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </div>
          <div>
            <div className="aero_experience">
              More Info
              <img src={aero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
