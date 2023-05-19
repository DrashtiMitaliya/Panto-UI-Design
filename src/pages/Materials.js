import React from "react";
import "./material.scss";
import aero from "../assets/images/orange_aero.svg";
// import img2 from "../assets/images/materialImg1.svg";
// import img1 from "../assets/images/materialImg2.svg";
// import img3 from "../assets/images/materialImg3.svg";
// import img4 from "../assets/images/materialImg4.svg";
import materialImgs from "../assets/images/material_image_2.svg";

const Materials = () => {
  return (
    <div className="material">
      <div className="row m-0">
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 order-md-2 order-sm-2 order-lg-2 order-xl-1 order-xxl-1 text_area">
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
            <div className="aero_symbol">
              More Info
              <img src={aero} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12  order-md-1 order-sm-1 order-lg-1 order-xl-2 order-xxl-2 imgs_section">
          <img src={materialImgs} className="materialImg" alt="" />
          {/* <img src={img1} alt="" className="m_img1" />
         <img src={img2} alt="" className="m_img2" />
           <img src={img3} alt="" className="m_img3 " />
          <img src={img4} alt="" className="m_img4" />  */}
        </div>
      </div>
    </div>
  );
};

export default Materials;
