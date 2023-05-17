import React from "react";
import search from "../assets/images/Search.svg";
import './heading.scss'

const Heading = () => {
  return (
    <div className="d-flex flex-column justify-content-center ">
      <div className="main_Heading">
        Make Your Interior More Minimalistic & Modern
      </div>
      <div className="sub_Heading">
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </div>
      <div className=" input_div m-auto">
        <input
          className="input_text"
          type="text"
          placeholder="search feature"
        />
        <img src={search} alt="searchbar" className="searchbar_icon" />
      </div>
    </div>
  );
};

export default Heading;
