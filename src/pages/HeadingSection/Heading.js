import React from "react";
import search from "../../assets/images/Search.svg";
import './heading.scss'
import Header from "../../components/common/Header";
import { Form } from 'react-bootstrap';

const Heading = () => {
    return (
        <div className='hero'>
            <Header />
            <div className='heroDetail text-center'>
                <div className='heroTitle m-auto'>
                    <p className='heroTitleText'>Make your interior more minimalistic & modern</p>
                </div>
                <div className='heroContent m-auto'>
                    <p className='heroContentText'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
                </div>
            </div>
            <div className='heroSearch '>
                <Form.Control type="email" placeholder="Search furniture" className='heroSearchInput' />
                <div className='searchBtn'>
                    <img src={search} alt='search btn' />
                </div>
            </div>
        </div>
    );
};

export default Heading;
