import React from "react";
import COH from "./static/coh-logo-big.png" 
import {
  Navbar,
  NavItem,
  Nav,
  MenuItem,
  NavDropdown,
  Glyphicon
} from "react-bootstrap";
const AppNav = props => {
  return (
    <Navbar style={{ border: 1, backgroundColor: "rgb(47, 38, 124)", color: "white", height: 92 }} collapseOnSelect id="navbar">
      <Navbar.Header>
        <Navbar.Brand style={{color: "white"}}>
        <img style={{height: 70, display: "inline-block", marginRight: 20, marginLeft: "-10%"}} src={COH}></img>
          <a style={{color: "white"}} href="https://www.cohsf.org/" id="Brand">
            Coalition On Homelessness
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNav;
