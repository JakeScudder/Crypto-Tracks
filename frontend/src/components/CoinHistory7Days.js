import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";

import Loader from "./Loader";

const CoinHistory7Days = ({ match }) => {
  //Index 0 is yesterday, index 6 is 7 days ago
  const [coinData, setCoinData] = useState([]);
  const [coinsFetched, setCoinsFetched] = useState(false);
  const [dates, setDates] = useState([]);
  const [chartDates, setChartDates] = useState([]);
  const [chartLoading, setChartLoading] = useState(true);
  const [YRange, setYRange] = useState([]);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (dates.length === 0) {
      setDates(dates.concat(lastSevenDays()));
      setChartDates(dates.concat(lastSevenDaysChart()));
    } else {
      fetchCoinById();
    }

    if (coinsFetched) {
      console.log("coins were fetched");
      formatDataForChart();
    }

    // eslint-disable-next-line
  }, [setDates, dates, coinsFetched]);

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

  const formatChartDate = (date) => {
    let dd = date.getDate();
    let month = date.getMonth();

    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    month = months[month];

    let format = `${month} ${dd}`;
    return format;
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

  //Get last 7 days for Chart
  const lastSevenDaysChart = () => {
    var result = [];
    for (var i = 0; i < 7; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(formatChartDate(d));
    }
    result.reverse();
    return result;
  };

  // const fetchCoinById = () => {
  //   console.log("Fetching Coin Data");
  //   let coinArr = [];
  //   dates.forEach(async (date) => {
  //     let url = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${date}`;
  //     console.log(url);
  //     await axios
  //       .get(url)
  //       .then((res) => coinArr.push(res.data))
  //       .catch((err) => console.log(err));
  //   });
  //   setCoinData(coinArr);
  //   setTimeout(() => {
  //     setCoinsFetched(true);
  //   }, 1000);
  // };

  //Trying new function
  const fetchCoinById = () => {
    console.log("Fetching Coin Data");

    let url0 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[0]}`;
    let url1 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[1]}`;
    let url2 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[2]}`;
    let url3 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[3]}`;
    let url4 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[4]}`;
    let url5 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[5]}`;
    let url6 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[6]}`;

    const promise0 = axios.get(url0);
    const promise1 = axios.get(url1);
    const promise2 = axios.get(url2);
    const promise3 = axios.get(url3);
    const promise4 = axios.get(url4);
    const promise5 = axios.get(url5);
    const promise6 = axios.get(url6);

    Promise.all([
      promise0,
      promise1,
      promise2,
      promise3,
      promise4,
      promise5,
      promise6,
    ])
      .then((values) => setCoinData(values))
      .catch((err) => console.log(err));

    setTimeout(() => {
      setCoinsFetched(true);
    }, 1500);
  };

  const formatDataForChart = () => {
    console.log("Building Chart");
    console.log(coinData);
    let data = [];
    chartDates.forEach((date, index) => {
      let coinValue = coinData[index].data.market_data.current_price.usd;
      console.log("Date:", date);
      console.log("Coin Value:", coinValue);
      let xyformat = {
        x: date,
        y: coinValue,
      };
      data.push(xyformat);
    });

    //Sort the Y Value in order to define Chart Min/Max
    let yData = [];
    data.forEach((obj) => {
      yData.push(obj.y);
    });

    yData.sort((a, b) => {
      return a - b;
    });
    let yMin = yData[0];
    let yMax = yData[6];

    yMin = yMin - yMin * 0.1;
    yMax = yMax + yMax * 0.1;

    let yValues = [yMin, yMax];
    setYRange(yValues);
    setChartLoading(false);
    setChartData(data);
  };

  return (
    <div className="historial-coin-container">
      <h2>{match.params.id.toUpperCase()} Past 7 Days</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row-wrap",
          width: "40%",
          marginLeft: "auto",
          marginRight: "auto",
        }}></div>
      <div className="coin-chart-container">
        {chartLoading ? (
          <Loader />
        ) : chartData.length > 0 ? (
          <Chart data={chartData} yValues={YRange} />
        ) : null}
      </div>
    </div>
  );
};

export default CoinHistory7Days;
