import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { HiShoppingBag } from "react-icons/hi";
import "./header.scss"; 

const Header = () => {
  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand href="#" className="text-light">Panto</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-light">Home</Nav.Link>
            <Nav.Link href="#action2" className="text-light">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="#" className="text-light">
              Shop
            </Nav.Link>
          </Nav>

          <div>
            <HiShoppingBag className="basket" color="white" size={30} />
            <div className="basket_badge">0</div>
          </div>
        </Navbar.Collapse>
      </Navbar>

      {/* <Navbar expand="lg">      
        <Container >
         <Navbar.Brand href="#home" className="text-light panto" >Panto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavDropdown title="Furniture" id="basic-nav-dropdown" className="panto_features text-light ">
                <NavDropdown.Item href="#furniture/3.1"  >Sofa</NavDropdown.Item>
                <NavDropdown.Item href="#furniture/3.2 ">Bad</NavDropdown.Item>
                <NavDropdown.Item href="#furniture/3.3 ">Table</NavDropdown.Item>
                <NavDropdown.Item href="#furniture/3.3 ">Chair</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="panto_features text-light " href="#shop" >Shop</Nav.Link>
              <Nav.Link className="panto_features text-light " href="#about">About Us</Nav.Link>
              <Nav.Link className="panto_features text-light " href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div>
            <HiShoppingBag className="basket" size={30} />
            <div className="basket_badge">0</div>
          </div>
        </Container>
      </Navbar> */}
    </div>
  );
};

export default Header;
