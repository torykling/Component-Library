import React from "react";
import blueButtons from "./Images/blueButtons.svg";

export default function BlueDiv() {
  return (
    <div style={blueDivStyle}>
      <img src={blueButtons} style={blueStyle} />
    </div>
  );
}

const blueStyle = {
  width: "102px",
  height: "46px"
};

const blueDivStyle = {
  textAlign: "center",
  width: "250px",
  height: "197px",
  backgroundColor: "rgba(255,255,255,.95)"
};
