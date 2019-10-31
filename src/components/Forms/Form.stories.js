import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form.js";

storiesOf("Form", module)
  .add("smallEmail", () => (
    <form className="smallEmailForm" label="form">
      <h5>Email</h5>
      <input className="smallInput" type="text" placeholder="Email"></input>
    </form>
  ))
  .add("mediumEmail", () => (
    <form className="mediumEmailForm" label="form">
      <h5>Email</h5>
      <input className="mediumInput" type="text" placeholder="Email"></input>
    </form>
  ))
  .add("largeEmail", () => (
    <form className="largeEmailForm" label="form">
      <h5>Email</h5>
      <input className="largeInput" type="text" placeholder="Email"></input>
    </form>
  ));
