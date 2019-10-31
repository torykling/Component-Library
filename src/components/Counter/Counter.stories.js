import React from "react";
import { storiesOf } from "@storybook/react";

import Counter from "./Counter.js";

storiesOf("Counter", module).add("Counter", () => (
  <Counter max={10} min={-10} value={0} step={2} />
));
