import logo from "./tree.svg";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./yeti.bootstrap.min.css";

import CryptoList from "./components/CryptoList";
import SingleCoin from "./components/SingleCoin";
import NavBar from "./components/NavBar";
import TrainBorder from "./components/TrainBorder";
import CoinHistory7Days from "./components/CoinHistory7Days";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <NavBar />
        <TrainBorder />
        <Route path="/home" component={CryptoList} />
        <Route exact path="/coin/:id" component={SingleCoin} />
        <Route exact path="/coin/:id/history" component={CoinHistory7Days} />
        <Route path="/search/:keyword" component={CryptoList} />
        <Route path="/" component={CryptoList} exact />
      </div>
    </Router>
  );
}

export default App;
