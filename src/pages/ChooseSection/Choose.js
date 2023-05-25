import React from "react";
import { chooseData } from "../../components/Constant/ChooseData";
import aero from "../../assets/images/orange_aero.svg";
import '../ChooseSection/choose.scss'

const Choose = () => {
  return (
    <div className="container-fluid">
      <div className="row pe-0 ps-0 choose">
        <div className="col-xxl-3 col-xl-4 col-lg-12   my-auto">
          <p className="choosingUsText ">Why Choosing Us</p>
        </div>
        <div className="col-xxl-9 col-xl-8 col-lg-12   choosingUsOptions">
          <div className="row text-start">
            {chooseData.map((item) => (
              <div className="col-xxl-4 col-xl-4 col-lg-12 choosingUsContent">
                <div className="choosingUsTitle">
                  <p className="my-1">{item.name}</p>
                </div>
                <div className="choosingUsDescription">
                  <p>{item.detail}</p>
                </div>
                <div>
                  <div className="aero_choose">
                    More Info
                    <img src={aero} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
