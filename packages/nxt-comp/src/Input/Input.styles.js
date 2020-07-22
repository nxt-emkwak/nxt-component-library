import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid
    ${(props) =>
      props.primary
        ? props.theme.palette.primary.main
        : props.secondary
        ? props.theme.palette.secondary.main
        : "#bdbdbd"};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 300;
  padding: 10px 40px 10px 10px;
  width: 150px;
`;

export default StyledInput;
