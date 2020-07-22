import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "../Theme/Theme";
import StyledInput from "./Input.styles.js";

const Input = ({
  className,
  primary,
  secondary,
  disabled,
  id,
  label,
  placeholder,
}) => (
  <ThemeProvider theme={theme}>
    <StyledInput
      className={className}
      disabled={disabled}
      id={id}
      placeholder={placeholder}
      type="text"
      primary={primary}
      secondary={secondary}
    ></StyledInput>
  </ThemeProvider>
);

export default Input;
