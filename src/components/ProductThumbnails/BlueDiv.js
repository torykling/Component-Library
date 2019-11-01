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
  height: "46px",
  margin: "40px 0"
};

const blueDivStyle = {
  textAlign: "center",
  width: "236px",
  height: "153px",
  zIndex: "1",
  backgroundColor: "rgba(255,255,255,.95)",
  position: "absolute"
};
