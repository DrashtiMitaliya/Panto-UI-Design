import React from "react";
import facebook from "../../assets/images/Facebook.svg";
import twitter from "../../assets/images/Twitter.svg";
import Instagram from "../../assets/images/Instagram.svg";

const Footer = () => {
  return (
    <div className="footer-class">
      <div className="container footer-container mx-auto">
        <div className="row">
          <div className="col-xl-4 p-0 col-sm-12  mb-5">
            <div className="footer_main text-sm-center text-xl-start  ">
              <div className="footer_main_title ">Panto</div>
              <div className="footer_main_content mx-auto ">
                The advantage of hiring a workspace with us is that gives you
                comfortable service and all-around facilities.
              </div>
            </div>
          </div>
          <div className="col-xl-8  col-sm-12">
            <div className="footer_sub justify-content-xl-start justify-content-between  d-xl-flex d-lg-flex d-md-flex text-md-start text-sm-center ">
              <div className="footer_list">
                <ul className="sublist_heading">Services</ul>
                <ul>
                  <li>
                    <a href="">Email Marketing</a>
                  </li>
                  <li>
                    <a href=""> Campaings</a>
                  </li>
                  <li>
                    <a href="">Branding</a>
                  </li>
                </ul>
              </div>
              <div className="footer_list">
                <ul className="sublist_heading">Furniture</ul>
                <ul>
                  <li>
                    <a href="/">Beds</a>
                  </li>
                  <li>
                    <a href="/">Chair</a>
                  </li>
                  <li>
                    <a href="/">All</a>
                  </li>
                </ul>
              </div>
              <div className="footer_list">
                <ul className="sublist_heading">Follow Us </ul>
                <ul>
                  <li>
                    <img src={facebook} alt="" />
                    <a href=""  className="ms-4">
                   
                      Facebook
                    </a>
                  </li>
                  <li>
                    <img src={twitter} alt="" />
                    <a href="" className="ms-3" >
                      {" "}
                      Twitter
                    </a>
                  </li>
                  <li>
                    <img src={Instagram} alt="" />
                    <a href="" className="ms-3" >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-sm-center text-lg-center mt-xxl-5 mt-xl-5 mt-lg-4 mt-md-3 mt-sm-2">
          <div className="col text-xxl-start ms-xxl-5 ps-xxl-0 ">
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
    </div>
  );
};

export default Footer;
