import logo from "./mountain.png";
import "./App.css";

import CryptoList from "./components/CryptoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CryptoList />
    </div>
  );
}

export default App;
