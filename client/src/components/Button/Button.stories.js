import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button.js";

export default {
  title: "Button",
  component: Button,
};

export const Button1 = () => (
  <Button onClick={action("clicked")}>Default</Button>
);
