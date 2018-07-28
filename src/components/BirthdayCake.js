import React from "react";
import "./BirthdayCake.css";

const BirthdayCake = () => {
  return (
    <div className="cake">
      <div className="plate" />
      <div className="layer layer-bottom" />
      <div className="layer layer-middle" />
      <div className="layer layer-top" />
      <div className="icing" />
      <div className="drip drip1" />
      <div className="drip drip2" />
      <div className="drip drip3" />
      <div className="candle">
        <div className="flame" />
      </div>
    </div>
  );
};

export default BirthdayCake;
