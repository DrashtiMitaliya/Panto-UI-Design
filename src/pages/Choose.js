import React from "react";
import "../components/Constant/ChooseData";
import { chooseData } from "../components/Constant/ChooseData";
import aero from "../assets/images/orange_aero.svg";
import './choose.scss'

const Choose = () => {
  return (
    <div className="choose ">
      <div >
        <div className="row justify-content-around">
          <div className="col-xxl-3  col-xl-3 col-lg-6 col-md-6 col-sm-12 choose_text">Why Choosing Us</div>
          {chooseData.map((data) => (
            <>
              <div key={data.id} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12  choose_items">
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
    </div>
  );
};

export default Choose;
