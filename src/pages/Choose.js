import React from "react";
import "../components/Constant/ChooseData";
import { chooseData } from "../components/Constant/ChooseData";
import aero from "../assets/images/orange_aero.svg";
import './choose.scss'

const Choose = () => {
  return (
    <div className="choose  ">
      <div className="row  ms-0 me-0 justify-content-center justify-content-sm-center">
        <div className="  choose_text">Why Choosing Us</div>
        {chooseData.map((data) => (
          <div key={data.id} className=" choose_items">
            <div className="choose_name">{data.name}</div>
            <div className="choose_detail">{data.detail}</div>
            <div className="aero_text">
              More Info
              <img src={aero} alt="" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Choose;
