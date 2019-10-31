import React from "react";
import { storiesOf } from "@storybook/react";

import Select from "./Select.js";

storiesOf("Select", module)
  .add("Large Select", () => <Select />)
  .add("Medium Select", () => <Select medium />)
  .add("Small Select", () => <Select small />)
  .add("Large Select Shadow", () => <Select shadow />)
  .add("Medium Select Shadow", () => <Select medium shadow />)
  .add("Small Select Shadow", () => <Select small shadow />);
