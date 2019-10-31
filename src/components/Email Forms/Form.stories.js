import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form.js";

storiesOf("Form", module)
  .add("Small Email", () => <Form small />)
  .add("Medium Email", () => <Form medium />)
  .add("Large Email", () => <Form large />);
