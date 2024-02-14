// SpinningCross.js

import React, { useState } from "react";
import "./spinningcross.css";

const SpinningCross = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={`cross ${clicked ? "clicked" : ""}`} onClick={handleClick}>
      <div className="horizontal-line"></div>
      <div className="vertical-line"></div>
    </div>
  );
};

export default SpinningCross;
