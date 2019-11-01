import React from "react";
import { storiesOf } from "@storybook/react";

import Thumbnail from "./Thumbnail.js";

storiesOf("Thumbnail", module)
  .add("First Block", () => <Thumbnail title="Apple Macbook Pro" block white />)
  .add("Second Block", () => <Thumbnail title="Apple Macbook Pro" block blue />)
  .add("Third Block", () => (
    <Thumbnail title="Apple Macbook Pro" block horizontal />
  ))
  .add("Fourth Block", () => (
    <Thumbnail title="Beats Solo 2 On Ear Headphones - Black" block small />
  ))
  .add("Fifth Block", () => (
    <Thumbnail
      title="Beats Solo 2 On Ear Headphones - Black"
      review={0}
      inline
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
    />
  ));
