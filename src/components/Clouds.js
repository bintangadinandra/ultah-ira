import React from "react";
import "./Clouds.css";

const Clouds = props => {
  return (
    <div id="background-wrap">
      <div className="x1">
        <div
          className="cloud"
          style={{ transform: `scale(${props.scale || 1})` }}
        />
      </div>
    </div>
  );
};

export default Clouds;
