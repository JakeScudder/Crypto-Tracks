import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { searchCoin } from "../actions/coinActions";
import { Navbar, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const NavBar = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   let formattedKeyword = keyword.toLowerCase();
  //   //Dispatch Redux action
  //   dispatch(searchCoin(formattedKeyword));
  //   history.push("/");
  // };

  //Clears search term when returning to Home screen
  const handleReset = () => {
    dispatch(searchCoin(""));
  };

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
          <NavLink className="nav-links" onClick={handleReset} exact to="/">
            Home
          </NavLink>
          <a className="nav-links" href="https://github.com/JakeScudder">
            <i className="fab fa-github"></i>
          </a>
          <NavLink className="nav-links" to="#">
            <i className="fab fa-instagram"></i>
          </NavLink>
        </Nav>
        {/* <Form onSubmit={submitHandler} inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 search-input"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button type="submit" variant="outline-light">
          Search
        </Button>
      </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavBar);
