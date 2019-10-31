import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form.js";

storiesOf("Form", module)
  .add("Small Email", () => <Form title="Email" small />)
  .add("Medium Email", () => <Form title="Email" medium />)
  .add("Large Email", () => <Form title="Email" large />);
