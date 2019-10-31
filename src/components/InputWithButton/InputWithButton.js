import React from "react";
import Form from "../EmailForms/Form.js";
import "./InputWithButton.css";

export default function InputWithButton(props) {
  let classList = "";
  let buttonClass = "";
  let divClass = "";
  if (props.large) {
    divClass += "bigDiv";
    classList += "large";
    buttonClass += "bigButton";
  }
  return (
    <div>
      <Form
        onSumbit={props.action}
        place={props.placeholder}
        className={classList}
      />
      <button className={buttonClass}>{props.title}</button>
    </div>
  );
}
