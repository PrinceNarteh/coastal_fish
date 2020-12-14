import styled from "styled-components";

const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
  display: block;
`;

export default Label;
