import React from "react";
import "./material.scss";
import aero from "../assets/images/orange_aero.svg";
import img2 from "../assets/images/materialImg1.svg";
import img1 from "../assets/images/materialImg2.svg";
import img3 from "../assets/images/materialImg3.svg";
import img4 from "../assets/images/materialImg4.svg";

const Materials = () => {
  return (
    <div className="material">
      <div className="row">
        <div className="col-6">
          <div className="materials">Materials</div>
          <div className="material_title">
            Very serious materials for making furniture
          </div>
          <div className="material_detail">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </div>
          <div>
            <div className="aero_text">
              More Info
              <img src={aero} alt="" />
            </div>
          </div>
        </div>
        <div className="col-6 imgs_section">
          <img src={img1} alt="" className="m_img1" />
         <img src={img2} alt="" className="m_img2" />
           <img src={img3} alt="" className="m_img3 " />
          <img src={img4} alt="" className="m_img4" /> 
        </div>
      </div>
    </div>
  );
};

export default Materials;
