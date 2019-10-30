import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  .add("Primary", () => <Button type="primary" label="Primary" />)
  .add("Danger", () => <Button type="danger" label="Danger" />)
  .add("Success", () => <Button type="success" label="Success" />)
  .add("Warning", () => <Button type="warning" label="Warning" />)
  .add("Large Primary", () => (
    <Button type="primary" label="Large Primary" large />
  ))
  .add("Large Warning", () => (
    <Button type="warning" label="Large Warning" large />
  ))
  .add("Primary Hover", () => (
    <Button type="primary" hover label="Primary Hover" />
  ))
  .add("Success Outline", () => (
    <Button type="success" outline label="Success Outline" />
  ));
