import styled from "styled-components";

const Button = ({ children, danger }) => {
  return <ButtonStyled danger={danger}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  background-color: ${(props) => (props.danger ? "crimson" : "teal")};
  border: none;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
`;

export default Button;
