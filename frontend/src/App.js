import React, { Component } from "react";
import logo from "./tree.svg";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./yeti.bootstrap.min.css";

import CryptoList from "./components/CryptoList";
import SingleCoin from "./components/SingleCoin";
import NavBar from "./components/NavBar";
import TrainBorder from "./components/TrainBorder";
import Train from "./components/Train";
import CoinHistory7Days from "./components/CoinHistory7Days";

import $ from "jquery";
$.Datatable = require("datatables.net");

class App extends Component {
  componentDidMount() {
    //initialize datatable
    setTimeout(() => {
      $.noConflict();
      $(document).ready(function () {
        $("#coin-table").DataTable();
      });
    }, 2000);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <NavBar />
          <Train />
          <TrainBorder />
          <Switch>
            <Route path="/home" component={CryptoList} />
            <Route exact path="/coin/:id" component={SingleCoin} />
            <Route
              exact
              path="/coin/:id/history"
              component={CoinHistory7Days}
            />
            <Route path="/search/:keyword" component={CryptoList} />
            <Route path="/" component={CryptoList} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
