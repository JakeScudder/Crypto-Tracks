import React, { useEffect, useState } from "react";

const SingleCoin = () => {
  const [coinData, setCoinData] = useState([]);

  const fetchCoinById = async () => {
    await axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((res) => setCoin(res.data))
      .catch((err) => console.log(err));
  };
  return <div></div>;
};

export default SingleCoin;
