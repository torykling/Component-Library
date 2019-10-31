import React from "react";
import { storiesOf } from "@storybook/react";

import InputWithButton from "./InputWithButton.js";

function myFunction() {
  alert("This is a callback!");
}

storiesOf("Input with Button", module)
  .add("Medium", () => (
    <InputWithButton
      medium
      placeholder="Voucher code"
      title="Redeem"
      action={myFunction}
    />
  ))
  .add("Large", () => (
    <InputWithButton
      large
      placeholder="Voucher code"
      title="Redeem"
      action={myFunction}
    />
  ));
