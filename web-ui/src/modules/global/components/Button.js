import styled from "styled-components";

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  background-color: teal;
  border: none;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
`;

export default Button;
