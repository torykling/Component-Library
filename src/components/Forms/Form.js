import React from "react";
import "./Form.css";

const Form = props => {
  return <form onSubmit={props.onSubmit}></form>;
};

export default Form;
