import React from "react";

import StyledInput from "./Input.styles.js";

const Input = ({ disabled, id, label, placeholder }) => (
  <StyledInput
    disabled={disabled}
    id={id}
    placeholder={placeholder}
    type="text"
  />
);

export default Input;
