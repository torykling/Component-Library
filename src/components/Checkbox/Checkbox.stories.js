import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox.js";

storiesOf("Checkbox", module)
  .add("Blue", () => <Checkbox blue />)
  .add("Black", () => <Checkbox black />)
  .add("Blue Check", () => <Checkbox blue checked />)
  .add("Black Check", () => <Checkbox black checked />)
  .add("Black with Message", () => (
    <Checkbox label="Don't show this popup again" checked black />
  ));
