import styled from "styled-components";

const Input = ({ type, ...props }) => {
  return <InputStyled type={type || "text"} {...props} />;
};

const InputStyled = styled.input`
  border: 1px solid #ccc;
  width: 100%;
  font-size: 1.6rem;
  color: #555;
  border-radius: 5rem;
  outline: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;

  &::focus {
    border: 1px solid red;
    font-size: 3rem;
  }
`;

export default Input;
