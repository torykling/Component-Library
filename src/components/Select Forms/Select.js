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
      <option>Select</option>
    </select>
  );
};

export default Select;
