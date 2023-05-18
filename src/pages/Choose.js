import React from "react";
import "../components/Constant/ChooseData";
import { chooseData } from "../components/Constant/ChooseData";
import aero from "../assets/images/orange_aero.svg";
import './choose.scss'

const Choose = () => {
  return (
    <div className="choose ">
      
        <div className="row ">
          <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-12 choose_text">Why Choosing Us</div>
          {chooseData.map((data) => (
            <>
              <div key={data.id} className=" col-xl-3 col-lg-4 col-md-6 col-sm-12 choose_items">
                <div className="choose_name">{data.name}</div>
                <div className="choose_detail">
                  <p>{data.detail}</p>
                </div>
                <div>
                  <div className="aero_text">
                    More Info
                    <img src={aero} alt="" />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      
    </div>
  );
};

export default Choose;
