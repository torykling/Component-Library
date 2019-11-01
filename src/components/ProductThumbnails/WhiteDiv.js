import React from "react";
import blueCart from "./Images/blueCart.svg";
import blueHeart from "./Images/blueHeart.svg";

export default function WhiteDiv(props) {
  return (
    <div style={whiteStyle}>
      <div style={whiteButtonStyle}>
        <button style={whiteRound} onClick={props.onClick}>
          <img src={blueHeart} />
        </button>
        <button style={whiteRound} onClick={props.onClick}>
          <img src={blueCart} />
        </button>
      </div>
    </div>
  );
}
const whiteRound = {
  borderRadius: "50px",
  border: "1px solid #33A0FF",
  backgroundColor: "white",
  height: "46px",
  width: "46px",
  padding: "14px"
};
const whiteButtonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
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
