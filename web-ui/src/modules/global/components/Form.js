import styled from "styled-components";

const Form = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

const StyledForm = styled.form`
  background-color: #fff;
  padding: 2rem 3rem;
  max-width: 35rem;
  border-radius: 1rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
`;

export default Form;
