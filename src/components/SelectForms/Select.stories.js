import React from "react";
import { storiesOf } from "@storybook/react";

import Select from "./Select.js";

storiesOf("Select", module)
  .add("Large Select", () => (
    <Select option1="Select" option2="Or this" option3="maybe this" />
  ))
  .add("Medium Select", () => (
    <Select medium option1="Select" option2="Or this" option3="maybe this" />
  ))
  .add("Small Select", () => (
    <Select small option1="Select" option2="Or this" option3="maybe this" />
  ))
  .add("Large Select Shadow", () => (
    <Select shadow option1="Select" option2="Or this" option3="maybe this" />
  ))
  .add("Medium Select Shadow", () => (
    <Select
      medium
      shadow
      option1="Select"
      option2="Or this"
      option3="maybe this"
    />
  ))
  .add("Small Select Shadow", () => (
    <Select
      small
      shadow
      option1="Select"
      option2="Or this"
      option3="maybe this"
    />
  ));
