import logo from "./tree.svg";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./yeti.bootstrap.min.css";

import CryptoList from "./components/CryptoList";
import SingleCoin from "./components/SingleCoin";
import NavBar from "./components/NavBar";
import TrainBorder from "./components/TrainBorder";
import CoinHistoryMonth from "./components/CoinHistoryMonth";

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
        <Route exact path="/coin/:id/history" component={CoinHistoryMonth} />
        <Route path="/search/:keyword" component={CryptoList} />
        <Route path="/" component={CryptoList} exact />
      </div>
    </Router>
  );
}

export default App;
