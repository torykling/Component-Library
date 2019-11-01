import React from "react";
import Form from "../EmailForms/Form.js";
import "./InputWithButton.css";

export default function InputWithButton(props) {
  if (props.medium) {
    return (
      <div class="mediumDiv">
        <Form
          onChange={props.onChange}
          onSubmit={props.action}
          place={props.placeholder}
          medium
        />
        <button onClick={props.action} className="inputButton">
          {props.title}
        </button>
      </div>
    );
  } else {
    return (
      <div class="bigDiv">
        <Form
          onChange={props.onChange}
          onSubmit={props.action}
          place={props.placeholder}
          large
        />
        <button onClick={props.action} className="inputButton bigButton">
          {props.title}
        </button>
      </div>
    );
  }
}
