import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "../Theme/Theme";
import StyledInput from "./Input.styles.js";

const Input = ({ primary, secondary, disabled, id, label, placeholder }) => (
  <ThemeProvider theme={theme}>
    <StyledInput
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
