import React, { useState } from "react";
import "./product.scss";
import { Nav } from "react-bootstrap";
import ChairSection from "./ChairSection";

const Product = () => {
  const [activeProduct, setActiveProduct] = useState("Chair");
  return (
    <div className="product">
      <div className="heading"> Best Selling Product</div>
      <div className="d-flex product_list">
        <div
          className={`products ${activeProduct === "Chair" ? "active" : ""}`}
        >
          <Nav.Item>
            <div
              eventKey="Chair"
              onClick={() => setActiveProduct("Chair")}
            >
              Chair
            </div>
          </Nav.Item>
        </div>
        <div className={`products ${activeProduct === "Beds" ? "active" : ""}`}>
          <Nav.Item>
            <div eventKey="beds" onClick={() => setActiveProduct("Beds")}>
              Beds
            </div>
          </Nav.Item>
        </div>
        <div
          className={`products ${activeProduct === "Sofa" ? "active" : ""}`}
        >
          <Nav.Item eventKey="sofa" onClick={() => setActiveProduct("Sofa")}>
            <div>Sofa</div>
          </Nav.Item>
        </div>
        <div className={`products ${activeProduct === "Lamp" ? "active" : ""}`}>
          <Nav.Item eventKey="Lamp" onClick={() => setActiveProduct("Lamp")}>
            <div>Lamp</div>
          </Nav.Item>
        </div>
      </div>
    <ChairSection/>
    
    </div>
  );
};

export default Product;
