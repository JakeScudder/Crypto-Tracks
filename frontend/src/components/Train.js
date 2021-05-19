import React from "react";
import train from "../train.svg";

const TrainBorder = () => {
  //Responsive css hides traintracks as screen size shrinks
  return (
    <div id="train-div">
      <img src={train} className="train" alt="logo" />
    </div>
  );
};

export default TrainBorder;