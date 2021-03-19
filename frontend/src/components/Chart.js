import React from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  ChartLabel,
} from "react-vis";

const Chart = ({ data, yValues }) => {
  //Chart's data and yValues are passed down from the CoinHistory7Days component
  return (
    <XYPlot
      yDomain={yValues}
      xType="ordinal"
      margin={{ left: 60, bottom: 50, top: 25 }}
      width={325}
      height={325}
      className="chart">
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} style={{ fontWeight: "600" }} />
      <YAxis />
      <ChartLabel
        xPercent={0.02}
        yPercent={-0.15}
        text="Price in $"
        className="alt-y-label"
      />
      <LineSeries color="#61dafb" data={data} />
    </XYPlot>
  );
};

export default Chart;
