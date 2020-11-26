import styled from "styled-components";

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  text-align: center;

  &::after {
    position: absolute;
    content: "";
    height: 0.2rem;
    width: 5rem;
    bottom: 0.6rem;
    background-color: crimson;

    margin: 0 auto;
    left: 0;
    right: 0;
  }
`;
