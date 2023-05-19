import React from "react";
import "./client.scss";
import { ClientReview } from "../components/Constant/ClientReview";
import union from "../assets/images/Union.svg";
import ratingStar from "../assets/images/rating_star.svg";
import Slider from "react-slick";

const Client = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="clients">
      <div className="row client_title">Testimonials</div>
      <div className="row client_reviews">Our Client Reviews</div>
      <div className="row me-0 ms-0 cards">
      <Slider {...settings}>
        {ClientReview.map((client) => (
          <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 client_card  m-md-2 m-sm-2 m-lg-2 ">
            <img src={client.bgImg} alt="" />
            <div className="sub_card">
              <img src={union} alt="" />
              <div className="junior_card">
                <img src={client.image} alt="" />
                <div className="client_title">{client.title}</div>
                <div className="client_name">{client.name}</div>
                <div className="client_detail">{client.review}</div>
                <div>
                  <img className="client_star" src={ratingStar} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
