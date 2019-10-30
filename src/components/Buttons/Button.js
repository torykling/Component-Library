import React from "react";
import "./Button.css";
// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  let classList = "";
  let types = [
    "primary",
    "danger",
    "success",
    "warning",
    "primaryShadow",
    "dangerShadow",
    "successShadow",
    "warningShadow",
    "defaultShadow"
  ];
  if (types.includes(props.type)) {
    classList += `button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.hover) {
    classList += ` button-${props.type}Hover`;
  }
  if (props.outline) {
    classList += ` button-${props.type}Outline`;
  }
  return (
    <button className={classList} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
