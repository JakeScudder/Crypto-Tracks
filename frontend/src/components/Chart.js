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
  return (
    <XYPlot
      yDomain={yValues}
      xType="ordinal"
      margin={{ left: 75, bottom: 100 }}
      width={350}
      height={350}
      className="chart">
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} style={{ fontWeight: "600" }} />
      <YAxis />
      <ChartLabel
        xPercent={0.07}
        yPercent={-0.18}
        text="Price in $"
        className="alt-y-label"
      />
      <LineSeries color="#61dafb" data={data} />
    </XYPlot>
  );
};

export default Chart;
