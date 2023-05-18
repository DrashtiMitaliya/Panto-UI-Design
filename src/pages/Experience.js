import React from 'react'
import './experience.scss';
import exp1 from '../assets/images/experienceImg2.svg';
import exp2 from '../assets/images/experienceImg1.svg';
import exp3 from '../assets/images/experienceImg3.svg';
import aero from '../assets/images/orange_aero.svg'

const Experience = () => {
    return (
        <div>
            <div className="row">
                <div className="col-6 img_class">
                    <img src={exp1} alt="" className='firstBehindImg' />
                    <img src={exp2} alt="" className='frontImg' />
                    <img src={exp3} alt="" className='secondBehindImg' />
                </div>
                <div className="col-6 text_class">
                    <div className='experiences'>EXPERIENCES</div>
                    <div className='title'>we provide you the best experience</div>
                    <div className='detail'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</div>
                    <div>
                        <div className="aero_text">
                            More Info
                            <img src={aero} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience