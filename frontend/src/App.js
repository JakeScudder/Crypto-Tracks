import logo from "./tree.svg";
import "./App.css";
import "./yeti.bootstrap.min.css";

import CryptoList from "./components/CryptoList";
import NavBar from "./components/NavBar";
import TrainBorder from "./components/TrainBorder";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NavBar />
      <TrainBorder />
      <CryptoList />
    </div>
  );
}

export default App;
