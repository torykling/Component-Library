import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox.js";

storiesOf("Checkbox", module)
  .add("Blue", () => <Checkbox blue />)
  .add("Black", () => <Checkbox black />)
  .add("Blue Check", () => <Checkbox blue checkOff />)
  .add("Black Check", () => <Checkbox black checkOff />)
  .add("Black with Message", () => (
    <Checkbox message="Don't show this popup again" checkOff black />
  ));
