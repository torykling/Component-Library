import React from "react";
import "./Form.css";

const Form = props => {
  let classList = "";
  let title = "";
  let place = "";
  if (props.medium) {
    classList += ` medium`;
  }
  if (props.large) {
    classList += ` large`;
  }
  if (props.title) {
    title += props.title;
  }
  if (props.place) {
    place += props.place;
  }
  if (!props.place) {
    place += props.title;
  }
  return (
    <form onSubmit={props.onSubmit}>
      <h5>{title}</h5>
      <input
        className={classList}
        placeholder={place}
        onChange={props.onChange}
      ></input>
    </form>
  );
};

export default Form;
