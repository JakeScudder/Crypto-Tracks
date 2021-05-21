import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import numeral from "numeral";

import Loader from "./Loader";
import Footer from "./Footer";

const CryptoList = ({ history }) => {
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (coinList && coinList.length > 0) {
      console.log("Coins loaded:", coinList);
    } else {
      fetchCoinList();
    }
    // eslint-disable-next-line
  }, [coinList, history]);

  //Fetches coin data from coingecko
  const fetchCoinList = async () => {
    console.log("fetching coins");
    // let config = {
    //   headers: {'Access-Control-Allow-Origin': '*'}
    // }

    await axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => setCoinList(res.data))
      .catch((err) => console.log(err));

    //Loading is finished, set state
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  //Shorten coin names if they are too long
  const formatName = (name) => {
    let formattedName;
    if (name.length > 15) {
      formattedName = `${name.substring(0, 12)}...`;
    } else {
      formattedName = name;
    }
    return formattedName;
  };

  //This function adds commas for proper formatting of numbers that are > -1 and < than 1.  Errors were occuring where numbers with 6-8 decimals were getting formatted as -.000,333
  const formatNumber = (x) => {
    if (Math.abs(x) > 1) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return x;
    }
  };

  return (
    <div id="crypto-list-div">
      <h2 id="crypto-list-title">Crypto Tracks</h2>
      <table id="coin-table">
        <thead className="thead-light">
          <tr>
            <th className="image-thead"></th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>24h Price Change</th>
            <th>24h % Change</th>
            <th>24h Low</th>
            <th>24h High</th>
            <th>Coins in Circulation</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {/* If no keyword in redux state, load normal top 100 coins */}
          {loading ? (
            <Loader />
          ) : (
            coinList.slice(0, 100).map((coin) => (
              <tr height="60px" className="coin-container" key={coin.id}>
                <td className="image-container">
                  <img
                    className="coin-image"
                    alt={coin.name}
                    src={coin.image}
                  />
                </td>
                <td className="coin-list-name">
                  <NavLink to={`/coin/${coin.id}/history`}>
                    {formatName(coin.name)}
                  </NavLink>
                </td>
                <td className="coin-list-symbol">
                  {coin.symbol.toUpperCase()}
                </td>
                <td className="coin-list-price">
                  $
                  {coin.current_price <= 0.5
                    ? coin.current_price.toFixed(4)
                    : coin.current_price <= 1
                    ? coin.current_price.toFixed(3)
                    : formatNumber(coin.current_price.toFixed(2))}
                </td>
                {Math.sign(coin.price_change_24h) > 0 ? (
                  <td
                    className="coin-list-price-change"
                    style={{ color: "#1c8815" }}>
                    $
                    {Math.abs(coin.price_change_24h) <= 0.1
                      ? formatNumber(coin.price_change_24h.toFixed(6))
                      : Math.abs(coin.price_change_24h) <= 0.5
                      ? formatNumber(coin.price_change_24h.toFixed(4))
                      : formatNumber(coin.price_change_24h.toFixed(2))}
                  </td>
                ) : (
                  <td
                    className="coin-list-price-change"
                    style={{ color: "#c12a2a" }}>
                    $
                    {Math.abs(coin.price_change_24h) <= 0.1
                      ? formatNumber(coin.price_change_24h.toFixed(6))
                      : Math.abs(coin.price_change_24h) <= 0.5
                      ? formatNumber(coin.price_change_24h.toFixed(4))
                      : formatNumber(coin.price_change_24h.toFixed(2))}
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
                <td className="coin-list-24low">
                  $
                  {Math.abs(coin.low_24h) <= 0.5
                    ? formatNumber(coin.low_24h.toFixed(6))
                    : Math.abs(coin.low_24h) <= 1
                    ? formatNumber(coin.low_24h.toFixed(4))
                    : formatNumber(coin.low_24h.toFixed(2))}
                </td>
                <td className="coin-list-24high">
                  $
                  {Math.abs(coin.high_24h) <= 0.5
                    ? formatNumber(coin.high_24h.toFixed(6))
                    : Math.abs(coin.high_24h) <= 1
                    ? formatNumber(coin.high_24h.toFixed(4))
                    : formatNumber(coin.high_24h.toFixed(2))}
                </td>
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
          )}
        </tbody>
      </table>
      {loading ? null : <Footer />}
    </div>
  );
};

export default CryptoList;
