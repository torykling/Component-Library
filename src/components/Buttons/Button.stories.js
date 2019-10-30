import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

const outline = {
  backgroundColor: "white"
};

storiesOf("Button", module)
  .add("Primary", () => <Button hover type="primary" label="Do something" />)
  .add("Danger", () => <Button hover type="danger" label="Do something" />)
  .add("Success", () => <Button hover type="success" label="Do something" />)
  .add("Warning", () => <Button hover type="warning" label="Do something" />)
  .add("Default", () => <Button hover type="default" label="Do something" />)
  .add("Primary Outline", () => (
    <Button outline type="primary" label="Do something" />
  ))
  .add("Danger Outline", () => (
    <Button outline type="danger" label="Do something" />
  ))
  .add("Success Outline", () => (
    <Button outline type="success" label="Do something" />
  ))
  .add("Warning Outline", () => (
    <Button outline type="warning" label="Do something" />
  ))
  .add("Default Outline", () => (
    <Button type="default" outline label="Do something" />
  ))
  .add("Primary Shadow", () => (
    <Button type="primaryShadow" label="Do something" />
  ))
  .add("Danger Shadow", () => (
    <Button type="dangerShadow" label="Do something" />
  ))
  .add("Success Shadow", () => (
    <Button type="successShadow" label="Do something" />
  ))
  .add("Warning Shadow", () => (
    <Button type="warningShadow" label="Do something" />
  ))
  .add("Default Shadow", () => (
    <Button type="defaultShadow" label="Do something" />
  ))
  //   copies to create larger buttons
  .add("Primary Large", () => (
    <Button hover large type="primary" label="Do something" />
  ))
  .add("Danger Large", () => (
    <Button hover large type="danger" label="Do something" />
  ))
  .add("Success Large", () => (
    <Button hover large type="success" label="Do something" />
  ))
  .add("Warning Large", () => (
    <Button hover large type="warning" label="Do something" />
  ))
  .add("Default Large", () => (
    <Button hover large type="default" label="Do something" />
  ))
  .add("Primary Outline Large", () => (
    <Button outline large type="primary" label="Do something" />
  ))
  .add("Danger Outline Large", () => (
    <Button outline large type="danger" label="Do something" />
  ))
  .add("Success Outline Large", () => (
    <Button outline large type="success" label="Do something" />
  ))
  .add("Warning Outline Large", () => (
    <Button outline large type="warning" label="Do something" />
  ))
  .add("Default Outline Large", () => (
    <Button type="default" outline large label="Do something" />
  ))
  .add("Primary Shadow Large", () => (
    <Button type="primaryShadow" large label="Do something" />
  ))
  .add("Danger Shadow Large", () => (
    <Button type="dangerShadow" large label="Do something" />
  ))
  .add("Success Shadow Large", () => (
    <Button type="successShadow" large label="Do something" />
  ))
  .add("Warning Shadow Large", () => (
    <Button type="warningShadow" large label="Do something" />
  ))
  .add("Default Shadow Large", () => (
    <Button type="defaultShadow" large label="Do something" />
  ));
