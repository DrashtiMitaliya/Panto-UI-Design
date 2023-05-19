import React from "react";
import "./footer.scss";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-class">
        <div className="row">
          <div className="col-xl-4 col-sm-12">
            <div className="footer_main">
              <div className="footer_main_title">
                Panto
              </div>
              <div className="footer_main_content">
              The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-sm-12">
            <div className="footer_sub">
              <div className="footer_list">
                <ul>Services</ul>
                <ul>Email Marketing</ul>
                <ul>Campaigns</ul>
                <ul>Branding</ul>
              </div>
              <div className="footer_list">
                <ul>Furniture</ul>
                <ul>Beds</ul>
                <ul>Furniture</ul>
                <ul>All</ul>
              </div>
              <div className="footer_list">
                <ul>Follow Us </ul>
                <ul>  <CgFacebook/> Facebook</ul>
                <ul> <AiOutlineTwitter/>Twitter</ul>
                <ul> <AiOutlineInstagram/> Instagram </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="footer">
    //   <div className="row footer_row">
    //     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
    //       <div className="heading">Panto</div>
    //       <div className="footer_detail">
    //         The advantage of hiring a workspace with us is that gives you
    //         comfortable service and all-around facilities.
    //       </div>
    //     </div>
    //     <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12" >
    //       <div className="row">
    //         <div className="col-xl-4 col-lg-4">
    //           <div className="footer_title">Services</div>
    //           <div className="footer_list">
    //             <ul>Email Marketing</ul>
    //             <ul>Campaigns</ul>
    //             <ul>Branding</ul>
    //           </div>
    //         </div>
    //         <div className="col-xl-4 col-lg-4">
    //           <div className="footer_title">Furniture</div>
    //           <div className="footer_list">
    //             <ul>Beds</ul>
    //             <ul>Chair</ul>
    //             <ul>All</ul>
    //           </div>
    //         </div>
    //         <div className="col-xl-4 col-lg-4">
    //           <div className="footer_title">Follow Us</div>
    //           <div className="footer_list">
    //             <ul>

    //               <CgFacebook className="me-1" />
    //               Facebook
    //             </ul>
    //             <ul>
    //               <AiOutlineTwitter className="me-1" />
    //               Twitter
    //             </ul>
    //             <ul>
    //               <AiOutlineInstagram className="me-1" />
    //               Instagram
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="d-flex justify-content-between ">
    //     <div className="copyright">Copyright © 2021</div>
    //     <div className="w-25 justify-content-between px-5 d-flex tc">
    //       <div>Terms & Conditions</div>
    //       <div>Privacy Policy</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
