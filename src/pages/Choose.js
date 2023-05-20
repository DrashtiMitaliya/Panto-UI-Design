import React from "react";
import "../components/Constant/ChooseData";
import { chooseData } from "../components/Constant/ChooseData";
import aero from "../assets/images/orange_aero.svg";
import './choose.scss'

const Choose = () => {
    return (
        <div className='container-fluid'>
            <div className='row choose'>
                <div className='col-xxl-4 col-xl-4 col-lg-12 my-auto'>
                    <p className='choosingUsText'>Why
                        Choosing Us</p>
                </div>
                <div className='col-xxl-8 col-xl-8 col-lg-12 choosingUsOptions'>
                    <div className='row text-start'>
                        {
                            chooseData.map(item => (
                                <div className='col-xxl-4 col-xl-4 col-lg-12 choosingUsContent'>
                                    <div className='choosingUsTitle'>
                                        <p>{item.name}</p>
                                    </div>
                                    <div className='choosingUsDescription'>
                                        <p>{item.detail}</p>
                                    </div>
                                    <div>
                                        <div className="aero_choose">
                                            More Info
                                            <img src={aero} alt="" />
                                        </div>
                                    </div>                        
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;
