import React, { useEffect, useState } from "react";
import axios from "axios";
const CoinHistoryMonth = ({ match }) => {
  //Index 0 is yesterday, index 6 is 7 days ago
  const [coinData, setCoinData] = useState([]);

  const [dates, setDates] = useState([]);

  useEffect(() => {
    if (dates.length === 0) {
      setDates(dates.concat(lastSevenDays()));
    }
    // eslint-disable-next-line
  }, [setDates, dates]);

  const formatDate = (date) => {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = dd + "-" + mm + "-" + yyyy;
    return date;
  };

  //Get last 7 days
  const lastSevenDays = () => {
    var result = [];
    for (var i = 0; i < 7; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(formatDate(d));
    }
    return result;
  };

  const fetchCoinById = () => {
    console.log("dates:", dates);
    console.log("Fetching History Data");
    let coinArr = [];
    dates.forEach((date) => {
      let url = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${date}`;
      console.log(url);
      axios
        .get(url)
        .then((res) => coinArr.push(res.data))
        .catch((err) => console.log(err));
    });
    console.log(coinArr);
    setCoinData(coinArr);
  };

  return (
    <div>
      <h2>Historical Coin Data</h2>
      <button style={{ width: "50px", height: "75px" }} onClick={fetchCoinById}>
        Fetch
      </button>
    </div>
  );
};

export default CoinHistoryMonth;
