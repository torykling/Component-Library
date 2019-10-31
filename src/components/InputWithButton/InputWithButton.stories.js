import React from "react";
import { storiesOf } from "@storybook/react";

import InputWithButton from "./InputWithButton.js";

let inputValue = "";
function onChange(e) {
  e.preventDefault();
  inputValue = e.target.value;
}
function myFunction(e) {
  e.preventDefault();
  alert(`This is a callback! You wrote " ${inputValue} "`);
}

storiesOf("Input with Button", module)
  .add("Medium", () => (
    <InputWithButton
      medium
      placeholder="Voucher code"
      title="Redeem"
      onChange={onChange}
      action={myFunction}
    />
  ))
  .add("Large", () => (
    <InputWithButton
      large
      placeholder="Voucher code"
      title="Redeem"
      onChange={onChange}
      action={myFunction}
    />
  ));
