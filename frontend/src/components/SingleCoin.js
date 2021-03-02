import React, { useEffect } from "react";
import axios from "axios";
const SingleCoin = ({ match }) => {
  // const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    fetchCoinById();
  });

  const fetchCoinById = async () => {
    await axios
      .get(`https://api.coingecko.com/api/v3/coins/${match.params.id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Single Coin Data</h2>
    </div>
  );
};

export default SingleCoin;
