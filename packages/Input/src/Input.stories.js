import React from "react";

import Input from "./index.js";

export default {
  component: Input,
  title: "Input",
};

export const Input1 = () => <Input />;

export const placeholder = () => <Input placeholder="user@gmail.com" />;
