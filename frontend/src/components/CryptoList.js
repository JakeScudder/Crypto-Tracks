import React, { useEffect, useState } from "react";
import axios from "axios";
import numeral from "numeral";

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
      .then((res) => setCoinList(res.data))
      .catch((err) => console.log(err));
  };

  const formatName = (name) => {
    let formattedName;
    if (name.length > 15) {
      formattedName = `${name.substring(0, 12)}...`;
    } else {
      formattedName = name;
    }
    return formattedName;
  };

  const formatNumber = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div>
      <h2>Crypto Tracks</h2>
      <table className="coin-table">
        <thead className="thead-light">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>24h Low</th>
            <th>24h High</th>
            <th>24h Price Change</th>
            <th>24h % Change</th>
            <th>Coins in Circulation</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coinList && coinList.length > 10
            ? coinList.slice(0, 100).map((coin) => (
                <tr height="50px" className="coin-container" key={coin.id}>
                  <td className="image-container">
                    <img
                      className="coin-image"
                      alt={coin.name}
                      src={coin.image}
                    />
                  </td>
                  <td className="coin-list-name">{formatName(coin.name)}</td>
                  <td className="coin-list-symbol">
                    {coin.symbol.toUpperCase()}
                  </td>
                  <td className="coin-list-price">
                    ${formatNumber(coin.current_price.toFixed(2))}
                  </td>
                  <td className="coin-list-24low">
                    ${formatNumber(coin.low_24h.toFixed(2))}
                  </td>
                  <td className="coin-list-24high">
                    ${formatNumber(coin.high_24h.toFixed(2))}
                  </td>

                  {Math.sign(coin.price_change_24h) > 0 ? (
                    <td
                      className="coin-list-price-change"
                      style={{ color: "#1c8815" }}>
                      ${formatNumber(coin.price_change_24h.toFixed(2))}
                    </td>
                  ) : (
                    <td
                      className="coin-list-price-change"
                      style={{ color: "#c12a2a" }}>
                      ${formatNumber(coin.price_change_24h.toFixed(2))}
                    </td>
                  )}

                  {Math.sign(coin.price_change_percentage_24h) > 0 ? (
                    <td
                      className="coin-list-percent-change"
                      style={{ color: "#1c8815" }}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                  ) : (
                    <td
                      className="coin-list-price-change"
                      style={{ color: "#c12a2a" }}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                  )}
                  <td className="coin-list-circulation">
                    {coin.circulating_supply
                      ? numeral(coin.circulating_supply)
                          .format("0.0a")
                          .toUpperCase()
                      : "null"}
                  </td>
                  <td className="coin-list-total-volume">
                    ${numeral(coin.market_cap).format("0.0a").toUpperCase()}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
