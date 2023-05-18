import React from "react";
import ".././components/Constant/ChairData";
import { ChairData } from ".././components/Constant/ChairData";
import "./chairSection.scss";
import plus from "../assets/images/Vector.svg";
import aero from "../assets/images/orange_aero.svg";

const ChairSection = () => {
  return (
    <div className="chair">
      <div className=" row d-flex">
        {ChairData.map((chair) => (
          <div className="col-xxl-3  col-xl-3 col-lg-6 col-md-6 col-sm-12 m-sm-3">
            <div className="chairCard">
              <div className="chair_img">
                <img className="imgs" src={chair.url} alt="" />
              </div>
              <div className="text_area ">
                <div className="sub">Chair</div>
                <div className="names">{chair.name}</div>
                <div className="star"> ⭐ ⭐ ⭐ ⭐ ⭐</div>
                <div>
                  <div className="price d-flex justify-content-between">
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
          </div>
        ))}
      </div>
      <div>
        <div className="aero_text">
          View All <img src={aero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChairSection;
