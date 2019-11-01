import React from "react";
import cost from "./Images/fivehundred.svg";

export default function Price() {
  return <img style={costStyle} src={cost} />;
}

const costStyle = {
  height: "16px",
  width: "86.5px"
};
