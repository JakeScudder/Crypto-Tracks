import React from "react";
import tracks from "../tracks.svg";

const TrainBorder = () => {
  //Responsive css hides traintracks as screen size shrinks
  return (
    <div id="traintrack-border">
      <img src={tracks} className="traintracks" alt="logo" />
      <img src={tracks} className="traintracks" alt="logo" />
      <img src={tracks} className="traintracks three" alt="logo" />
      <img src={tracks} className="traintracks four" alt="logo" />
    </div>
  );
};

export default TrainBorder;
