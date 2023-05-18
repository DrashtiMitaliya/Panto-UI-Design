import React from "react";
import "./client.scss";
import { ClientReview } from "../components/Constant/ClientReview";
import union from "../assets/images/Union.svg";
import ratingStar from "../assets/images/rating_star.svg";

const Client = () => {
  return (
    <div className="clients">
      <div className="row client_title">Testimonials</div>
      <div className="row client_reviews">Our Client Reviews</div>
      <div className="row cards">
        {ClientReview.map((client) => (
          <div className="col-4 client_card">
            <img src={client.bgImg} alt="" />
            <div className="sub_card">
              <img src={union} alt="" />
              <div className="junior_card">
                <img src={client.image} alt="" />
                <div className="client_title">{client.title}</div>
                <div className="client_name">{client.name}</div>
                <div className="client_detail">{client.review}</div>
                <div >
                  <img  className="client_star" src={ratingStar} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
