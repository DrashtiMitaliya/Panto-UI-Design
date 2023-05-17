import React from "react";
import ".././components/Constant/ChairData";
import { ChairData } from ".././components/Constant/ChairData";
import "./chairSection.scss";
import plus from "../assets/images/Vector.svg";

const ChairSection = () => {
  return (
    <div className="chair">
      <div className=" row d-flex">
        {ChairData.map((chair) => (
          <div className="col-col-xxl-3  col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="chairCard">
              <div className="chair_img">
                <img className="imgs" src={chair.url} alt="" />
              </div>
              <div className="text_area ">
                <div className="sub">Chair</div>
                <div className="names">{chair.name}</div>
                <div className="star"> ⭐ ⭐ ⭐ ⭐ ⭐</div>
                <div >
                  <div className="price d-flex">
                    <span className="dollar me-1">$</span>
                    {chair.price}
                  </div>
                  <div className="plus">
                    <img src={plus} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChairSection;
