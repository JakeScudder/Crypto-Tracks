import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCoin } from "../actions/coinActions";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(keyword);
    let formattedKeyword = keyword.toLowerCase();
    dispatch(searchCoin(formattedKeyword));
  };

  const handleReset = () => {
    dispatch(searchCoin(""));
  };

  return (
    <Navbar
      bg="primary"
      variant="dark"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        overflow: "hidden",
      }}>
      <Navbar.Brand className="App-title" href="#">
        Crypto Tracks
      </Navbar.Brand>
      <Nav style={{ verticalAlign: "middle" }} className="mr-auto">
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
      <Form onSubmit={submitHandler} inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 search-input"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button type="submit" variant="outline-light">
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default NavBar;