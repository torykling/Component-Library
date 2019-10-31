import React from "react";
import "./Select.css";

const Select = props => {
  let classList = "";
  if (props.medium) {
    classList += ` medium`;
  }
  if (props.small) {
    classList += ` large`;
  }
  return (
    <select className={classList}>
      <option></option>
      <option></option>
      <option></option>
    </select>
  );
};

export default Select;
