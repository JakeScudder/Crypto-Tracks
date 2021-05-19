import React from "react";
import { Row, Col } from "react-bootstrap";

const ChartInfo = ({ data }) => {
  const formatNumber = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  //This simple component displays Chart data in a small table below the graph. Data is from the CoinHistory7Days Component
  return (
    <>
      <Row className="chart-info-header">
        <Col className="chart-info-header">Day</Col>
        <Col className="chart-info-header">Price</Col>
      </Row>
      <Row className="chart-info-container">
        {data.map((xy) => (
          <Row className="chart-info-data-point" key={xy.x}>
            <Col className="xypoint">{xy.x}</Col>
            {/* Format chart data based on size of number */}
            <Col className="xypoint">
              ${xy.y <= 0.01 ? xy.y.toFixed(8) : xy.y <= 0.5 ? xy.y.toFixed(4) : formatNumber(xy.y.toFixed(2))}
            </Col>
          </Row>
        ))}
      </Row>
    </>
  );
};

export default ChartInfo;
