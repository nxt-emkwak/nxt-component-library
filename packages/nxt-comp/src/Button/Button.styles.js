import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 64px;
  color: #34dbeb;
  background-color: ${(props) =>
    props.primary
      ? props.theme.palette.primary.main
      : props.secondary
      ? props.theme.palette.secondary.main
      : "#bdbdbd"};
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  margin: 1em;
  padding: 6px 16px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
`;
export default StyledButton;
