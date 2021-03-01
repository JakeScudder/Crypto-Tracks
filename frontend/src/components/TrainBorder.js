import React from "react";
import tracks from "../tracks.svg";

const TrainBorder = () => {
  return (
    <div id="traintrack-border">
      <img src={tracks} className="traintracks" alt="logo" />
      <img src={tracks} className="traintracks" alt="logo" />
      <img src={tracks} className="traintracks" alt="logo" />
      <img src={tracks} className="traintracks" alt="logo" />
    </div>
  );
};

export default TrainBorder;
