import React from "react";

import StyledButton from "./Button.styles";

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
