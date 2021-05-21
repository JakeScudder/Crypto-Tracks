import React from "react";
import { withRouter } from "react-router";
import { Navbar, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const NavBar = ({ history }) => {
  return (
    <Navbar
      className="navbar-container"
      variant="dark"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        overflow: "hidden",
      }}
      expand="lg">
      <Navbar.Brand className="App-title" href="#">
        Crypto Tracks
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-links-container">
          <a className="nav-links" href="/">
            Home
          </a>
          <a className="nav-links" href="https://github.com/JakeScudder">
            <i className="fab fa-github"></i>
          </a>
          <NavLink className="nav-links" to="#">
            <i className="fab fa-instagram"></i>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavBar);
