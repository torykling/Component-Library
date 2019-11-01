import React from "react";
import laptop from "./Images/laptop.png";

export default function Laptop() {
  return <img style={laptopStyle} src={laptop} />;
}

const laptopStyle = {
  width: "236px",
  height: "153px",
  alignSelf: "center",
  position: "absolute"
};
