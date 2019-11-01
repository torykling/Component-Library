import React from "react";
import whiteButtons from "./Images/whiteButtons.svg";

export default function WhiteDiv() {
  return (
    <div style={whiteStyle}>
      <img style={whiteButtonStyle} src={whiteButtons} />
    </div>
  );
}

const whiteButtonStyle = {
  height: "46px",
  width: "102px",
  margin: "40px auto"
};

const whiteStyle = {
  textAlign: "center",
  width: "236px",
  height: "153px",
  zIndex: "1",
  backgroundColor: "rgba(255,255,255,.95)",
  position: "absolute"
};
