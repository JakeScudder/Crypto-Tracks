import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoList = () => {
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    if (coinList && coinList.length > 0) {
      console.log("Coins loaded:", coinList);
    } else {
      fetchCoinList();
    }
  }, [coinList]);

  const fetchCoinList = async () => {
    await axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => setCoinList(res.data));
  };

  return (
    <div>
      <h2>Crypto Tracks</h2>
      {coinList && coinList.length > 10
        ? coinList.slice(0, 100).map((coin) => (
            <div className="coin-container" key={coin.id}>
              <div className="image-container">
                <img className="coin-image" alt={coin.name} src={coin.image} />
              </div>
              <h3 className="coin-list-name">{coin.name}</h3>
              <h3 className="coin-list-symbol">{coin.symbol}</h3>
              <h3 className="coin-list-price">${coin.current_price}</h3>
            </div>
          ))
        : null}
    </div>
  );
};

export default CryptoList;
