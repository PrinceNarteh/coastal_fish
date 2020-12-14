const { default: styled } = require("styled-components");

const TextArea = ({ children, ...props }) => {
  return (
    <StyledTextArea rows="10" {...props}>
      {children}
    </StyledTextArea>
  );
};

const StyledTextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export default TextArea;
