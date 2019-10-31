import React from "react";
import { storiesOf } from "@storybook/react";

import Select from "./Select.js";

storiesOf("Select", module)
  .add("Large Select", () => <Select small />)
  .add("Medium Select", () => <Select small />)
  .add("Small Select", () => <Select small />);
