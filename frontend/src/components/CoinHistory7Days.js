import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";
import ChartInfo from "./ChartInfo";

import { Button } from "react-bootstrap";

import Loader from "./Loader";

const CoinHistory7Days = ({ match }) => {
  //Index 0 is yesterday, index 6 is 7 days ago
  const [coinData, setCoinData] = useState([]);
  const [dates, setDates] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const [sevenDayStatus, setSevenDayStatus] = useState(true);
  const [thirtyDayStatus, setThirtyDayStatus] = useState(false);
  const [sixtyDayStatus, setSixtyDayStatus] = useState(false);

  const [chartDates, setChartDates] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [YRange, setYRange] = useState([]);
  const [chartLoading, setChartLoading] = useState(true);

  useEffect(() => {
    if (thirtyDayStatus || sevenDayStatus || sixtyDayStatus) {
      setTimeout(() => {
        if (!dataFetched) {
          fetchCoinById();
        }
      }, 1500);
    }

    if (dates.length === 0) {
      setDates(dates.concat(lastSevenDays()));
      setChartDates(dates.concat(lastSevenDaysChart()));
    } else {
      if (!dataFetched && !thirtyDayStatus) {
        console.log("Fetching Coin in use Effect");
        fetchCoinById();
      }
    }

    if (coinData.length > 0 && dataFetched) {
      formatDataForChart();
    }

    // eslint-disable-next-line
  }, [setDates, dates, coinData]);

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

  //******* Buttons*/

  //Handle 7 days Button
  const handleSeven = () => {
    setChartLoading(true);
    setDataFetched(false);
    setSevenDayStatus(true);
    setThirtyDayStatus(false);
    setSixtyDayStatus(false);
    let emptArr = [];
    let days = lastSevenDays();
    let localChartDays = lastSevenDaysChart();
    setDates(emptArr);
    setChartDates(emptArr);
    setDates(days);
    setChartDates(localChartDays);
  };

  //Handle 30 days Button
  const handleThirty = () => {
    setChartLoading(true);
    setDataFetched(false);
    setThirtyDayStatus(true);
    setSixtyDayStatus(false);
    setSevenDayStatus(false);
    let emptArr = [];
    let days = lastThirtyDays();
    let localChartDays = lastThirtyDaysChart();
    setDates(emptArr);
    setChartDates(emptArr);
    setDates(days);
    setChartDates(localChartDays);
  };

  //Handle 60 days Button
  const handleSixty = () => {
    setChartLoading(true);
    setDataFetched(false);
    setSixtyDayStatus(true);
    setThirtyDayStatus(false);
    setSevenDayStatus(false);
    let emptArr = [];
    let days = lastSixtyDays();
    let localChartDays = lastSixtyDaysChart();
    setDates(emptArr);
    setChartDates(emptArr);
    setDates(days);
    setChartDates(localChartDays);
  };

  //Get last 30 days
  const lastThirtyDays = () => {
    var result = [];
    for (var i = 0; i <= 30; i += 5) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(formatDate(d));
    }
    return result;
  };

  //Get last 30 days for Chart
  const lastThirtyDaysChart = () => {
    var result = [];
    for (var i = 0; i <= 30; i += 5) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(formatChartDate(d));
    }
    result.reverse();
    return result;
  };

  //Get last 60 days
  const lastSixtyDays = () => {
    var result = [];
    for (var i = 0; i <= 60; i += 10) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(formatDate(d));
    }
    return result;
  };

  //Get last 60 days for Chart
  const lastSixtyDaysChart = () => {
    var result = [];
    for (var i = 0; i <= 60; i += 10) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(formatChartDate(d));
    }
    result.reverse();
    return result;
  };

  //Promise based chart data
  const fetchCoinById = () => {
    console.log("Fetching Coin Data");

    let url0;
    let url1;
    let url2;
    let url3;
    let url4;
    let url5;
    let url6;

    if (dates && dates[0]) {
      url0 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[0]}`;
      url1 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[1]}`;
      url2 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[2]}`;
      url3 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[3]}`;
      url4 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[4]}`;
      url5 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[5]}`;
      url6 = `https://api.coingecko.com/api/v3/coins/${match.params.id}/history?date=${dates[6]}`;
    }

    const promise0 = axios.get(url0);
    const promise1 = axios.get(url1);
    const promise2 = axios.get(url2);
    const promise3 = axios.get(url3);
    const promise4 = axios.get(url4);
    const promise5 = axios.get(url5);
    const promise6 = axios.get(url6);

    Promise.all([
      promise6,
      promise5,
      promise4,
      promise3,
      promise2,
      promise1,
      promise0,
    ])
      .then((values) => {
        let emptArr = [];
        setDataFetched(true);
        console.log("coinData Fetched");
        setCoinData(emptArr);
        setCoinData(values);
      })
      .catch((err) => console.log(err));
  };

  const formatDataForChart = () => {
    console.log("Building Chart");
    // console.log("coinData State:", coinData);

    let data = [];
    if (coinData && coinData[0]) {
      chartDates.forEach((date, index) => {
        let coinValue = coinData[index].data.market_data.current_price.usd;
        let xyformat = {
          x: date,
          y: coinValue,
        };
        data.push(xyformat);
      });
    }

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
      <div className="image-title-container">
        {coinData && coinData[0] ? (
          <img
            className="coin-image-graph"
            src={coinData[0].data.image.small}
            alt={coinData[0].data.name}
          />
        ) : null}
        <h4>
          {match.params.id.toUpperCase()}{" "}
          {sevenDayStatus ? "Past 7 Days" : null}
          {thirtyDayStatus ? "Past 30 Days" : null}
          {sixtyDayStatus ? "Past 60 Days" : null}
        </h4>
      </div>

      <div className="button-graph-container">
        <Button className="graph-days-button" onClick={handleSeven}>
          7 Days
        </Button>
        <Button className="graph-days-button" onClick={handleThirty}>
          30 Days
        </Button>
        <Button className="graph-days-button" onClick={handleSixty}>
          60 Days
        </Button>
      </div>
      <div className="coin-chart-container">
        {chartLoading ? (
          <Loader />
        ) : chartData.length > 0 ? (
          <>
            <Chart data={chartData} yValues={YRange} />
            <ChartInfo data={chartData} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CoinHistory7Days;
