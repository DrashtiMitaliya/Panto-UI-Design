import React from "react";
import "./footer.scss";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
  
      <div className="footer-class">
        <div className="row">
          <div className="col-xl-4 p-0 col-sm-12  mb-5">
            <div className="footer_main text-sm-center text-xl-start  ">
              <div className="footer_main_title ">
                Panto
              </div>
              <div className="footer_main_content">
                The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-sm-12 ">
            <div className="footer_sub d-xl-flex d-lg-flex d-md-flex text-md-start text-sm-center ">
              <div className="footer_list">
                <ul className="sublist_heading">Services</ul>
                <ul>Email Marketing</ul>
                <ul>Campaigns</ul>
                <ul>Branding</ul>
              </div>
              <div className="footer_list">
                <ul className="sublist_heading">Furniture</ul>
                <ul>Beds</ul>
                <ul>Furniture</ul>
                <ul>All</ul>
              </div>
              <div className="footer_list">
                <ul className="sublist_heading">Follow Us </ul>
                <ul>  <CgFacebook /> Facebook</ul>
                <ul> <AiOutlineTwitter />Twitter</ul>
                <ul> <AiOutlineInstagram /> Instagram </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-sm-center text-lg-center mt-xxl-5 mt-xl-5 mt-lg-4 mt-md-3 mt-sm-2">
          <div className="col-xl-5 col-xxl-4 ">
            <p className="copyright">Copyright © 2021</p>
          </div>
          <div className="col-lg-12 col-xl-6 col-xxl-7">
            <div className="row justify-content-end ">
              <div className="col-xl-4">
                <p className="terms">Terms & Conditions</p>
              </div>
              
              <div className="col-xl-4">
                <p className="privacy">Privacy Policy</p>
              </div>
            </div>
          </div>  
        </div>

    </div>
  );
};

export default Footer;
