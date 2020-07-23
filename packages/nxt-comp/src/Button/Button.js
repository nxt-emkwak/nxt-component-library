import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "../Theme/Theme";
import StyledButton from "./Button.styles";

function Button({ primary, secondary, children }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton primary={primary} secondary={secondary}>
        {children}
      </StyledButton>
    </ThemeProvider>
  );
}

export default Button;
