import styled from "styled-components";

const Button = ({ children, danger, fontSize }) => {
  return (
    <ButtonStyled danger={danger} fontSize={fontSize}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background-color: ${(props) => (props.danger ? "crimson" : "teal")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "1.6rem")};
  border: none;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  outline: none;
`;

export default Button;
