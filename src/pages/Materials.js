import React from 'react';
import './material.scss';
import aero from '../assets/images/orange_aero.svg'

const Materials = () => {
    return (
        <div className='material'>
            <div className="row">
                <div className="col-6">
                    <div className='materials'>Materials</div>
                    <div className='material_title'>Very serious materials for making furniture</div>
                    <div className='material_detail'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</div>
                    <div>
                        <div className="aero_text">
                            More Info
                            <img src={aero} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    vbhjnm
                </div>
            </div>
        </div>
    )
}

export default Materials