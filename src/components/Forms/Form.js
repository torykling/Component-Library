import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input onChange={props.onChange}></input>
    </form>
  );
};

export default Form;
