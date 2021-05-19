import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";
import numeral from "numeral";

const CryptoList = ({ history }) => {
  const [coinList, setCoinList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  //Grab Redux state
  const coinSearch = useSelector((state) => state.coinSearch);
  const { keyword } = coinSearch;

  useEffect(() => {
    if (coinList && coinList.length > 0) {
      console.log("Coins loaded:", coinList);
    } else {
      fetchCoinList();
    }

    //This keyword is grabbed from the global Redux state
    if (keyword) {
      handleSearch(keyword);
    }
    // eslint-disable-next-line
  }, [coinList, keyword, history]);

  //Searches through coins for keyword
  const handleSearch = (keyword) => {
    console.log("searching");
    let result = [];
    coinList.forEach((coin) => {
      if (coin.id.includes(keyword)) {
        result.push(coin);
      }
    });
    setSearchList(result);
    history.push(`/search/${keyword}`);
  };

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

  const sortTable = (n) => {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("coin-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir === "asc") {
          let formatX = x.innerHTML.replace(/\$/g, '')
          let formatY = y.innerHTML.replace(/\$/g, '')
          if (Number(formatX) > Number(formatY)) {
            // If so, mark as a switch and break the loop:
            console.log("formatX:", Number(formatX), "formatY:", Number(formatY))
            console.log(Number(formatX) > Number(formatY))

            shouldSwitch = true;
            break;
          }
        } else if (dir === "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  return (
    <div id="crypto-list-div">
      <h2 id="crypto-list-title">Crypto Tracks</h2>
      <table id="coin-table">
        <thead className="thead-light">
          <tr>
            <th className="image-thead"></th>
            <th onClick={() => sortTable(1)}>Name</th>
            <th onClick={() => sortTable(2)}>Symbol</th>
            <th onClick={() => sortTable(3)}>Current Price</th>
            <th onClick={() => sortTable(4)}>24h Price Change</th>
            <th onClick={() => sortTable(5)}>24h % Change</th>
            <th onClick={() => sortTable(6)}>24h Low</th>
            <th onClick={() => sortTable(7)}>24h High</th>
            <th onClick={() => sortTable(8)}>Coins in Circulation</th>
            <th onClick={() => sortTable(9)}>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {/* If no keyword in redux state, load normal top 100 coins */}
          {coinList && coinList.length > 10 && keyword === ""
            ? coinList.slice(0, 100).map((coin) => (
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
                      ? coin.current_price.toFixed(4) : coin.current_price <= 1
                      ? coin.current_price.toFixed(3)
                      : formatNumber(coin.current_price.toFixed(2))}
                  </td>
                  {Math.sign(coin.price_change_24h) > 0 ? (
                    <td
                      className="coin-list-price-change"
                      style={{ color: "#1c8815" }}>
                      ${Math.abs(coin.price_change_24h) <= 0.1 ? formatNumber(coin.price_change_24h.toFixed(6)) : Math.abs(coin.price_change_24h) <= 0.5 ? formatNumber(coin.price_change_24h.toFixed(4)) : formatNumber(coin.price_change_24h.toFixed(2)) }
                    </td>
                  ) : (
                    <td
                      className="coin-list-price-change"
                      style={{ color: "#c12a2a" }}>
                      ${Math.abs(coin.price_change_24h) <= 0.1 ? formatNumber(coin.price_change_24h.toFixed(6)) : Math.abs(coin.price_change_24h) <= 0.5 ? formatNumber(coin.price_change_24h.toFixed(4)) : formatNumber(coin.price_change_24h.toFixed(2)) }
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
                    ${Math.abs(coin.low_24h) <= .5 ? formatNumber(coin.low_24h.toFixed(6)) : Math.abs(coin.low_24h) <= 1 ? formatNumber(coin.low_24h.toFixed(4)) : formatNumber(coin.low_24h.toFixed(2)) }
                  </td>
                  <td className="coin-list-24high">
                    ${Math.abs(coin.high_24h) <= .5 ? formatNumber(coin.high_24h.toFixed(6)) : Math.abs(coin.high_24h) <= 1 ? formatNumber(coin.high_24h.toFixed(4)) : formatNumber(coin.high_24h.toFixed(2)) }
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
            : searchList.map((coin) => (
                <tr height="50px" className="coin-container" key={coin.id}>
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
                    ${formatNumber(coin.current_price.toFixed(2))}
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
                  <td className="coin-list-24low">
                    ${formatNumber(coin.low_24h.toFixed(2))}
                  </td>
                  <td className="coin-list-24high">
                    ${formatNumber(coin.high_24h.toFixed(2))}
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
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
