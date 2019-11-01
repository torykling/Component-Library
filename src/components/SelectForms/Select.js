import React from "react";
import "./Select.css";

const Select = props => {
  let classList = "";
  if (props.medium) {
    classList += ` medium`;
  }
  if (props.small) {
    classList += ` small`;
  }
  if (props.shadow) {
    classList += ` shadow`;
  }
  return (
    <select className={classList}>
      <option selected="selected">{props.option1}</option>
      <option>{props.option2}</option>
      <option>{props.option3}</option>
    </select>
  );
};

export default Select;
