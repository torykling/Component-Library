import React from "react";
import whiteCart from "./Images/whiteCart.svg";
import whiteHeart from "./Images/whiteHeart.svg";

export default function BlueDiv(props) {
  return (
    <div style={blueStyle}>
      <div style={blueButtonStyle}>
        <button style={blueRound} onClick={props.onClick}>
          <img src={whiteHeart} />
        </button>
        <button style={blueRound} onClick={props.onClick}>
          <img src={whiteCart} />
        </button>
      </div>
    </div>
  );
}
const blueRound = {
  borderRadius: "50px",
  border: "1px solid #33A0FF",
  backgroundColor: "#33A0FF",
  height: "46px",
  width: "46px",
  padding: "14px"
};
const blueButtonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "46px",
  width: "102px",
  margin: "40px auto"
};

const blueStyle = {
  textAlign: "center",
  width: "236px",
  height: "153px",
  zIndex: "1",
  backgroundColor: "rgba(255,255,255,.95)",
  position: "absolute"
};
