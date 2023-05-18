import React from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { HiShoppingBag } from "react-icons/hi";
import "./header.scss";

const Header = () => {
  return (
    <div className="container-fluid">
      <Navbar expand="lg">
        <Navbar.Brand href="#" className="text-light panto">
          Panto
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll "
          className="bg-light toggle_class"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-lg-0 text-center"
            style={{ maxHeight: "100px" }}
          >
            <NavDropdown title="Furniture" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sofa</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Bad</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Table</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Chair</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action2" className="text-light panto_features ">
              Shop
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light panto_features ">
              About Us
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light panto_features ">
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="bucket_class">
            <Nav.Link href="#">
              <HiShoppingBag className="basket " color="white" size={40} />
              <div className="basket_badge">0</div>
            </Nav.Link>
          </Nav>
          <Nav.Link className="d-inline-block   ">
            <div></div>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
