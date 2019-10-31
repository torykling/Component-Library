import React from "react";
import "./Form.css";

const Form = props => {
  let classList = "";
  if (props.medium) {
    classList += ` medium`;
  }
  if (props.large) {
    classList += ` large`;
  }
  return (
    <form onSubmit={props.onSubmit}>
      <h5>Email</h5>
      <input
        className={classList}
        placeholder="Email"
        onChange={props.onChange}
      ></input>
    </form>
  );
};

export default Form;
