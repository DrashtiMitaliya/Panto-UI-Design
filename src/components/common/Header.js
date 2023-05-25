import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { HiShoppingBag } from "react-icons/hi";


const Header = () => {
  return (
    
      <div className="header">
        <Navbar className="pantoHeader" expand="lg">
          <div className="container navbar-container">
          <Navbar.Brand className="text-light pantoTitle">Panto</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="pantoToggle m-auto"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavDropdown
                title="Furniture"
                id="basic-nav-dropdown"
                className="pantoDropdown text-center ps-5 ms-md-2 ms-sm-2"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  className="text-dark text-center"
                >
                  Furniture
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="pantoShop text-center">Shop</Nav.Link>
              <Nav.Link className="pantoAbout  text-center">About</Nav.Link>
              <Nav.Link className="pantoContact  text-center">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="pantoLogo">
            <HiShoppingBag size={40} style={{ color: "white" }} />
            <div className="counter">0</div>
          </div>
          </div>
         
        </Navbar>
      </div>
  
  );
};

export default Header;
