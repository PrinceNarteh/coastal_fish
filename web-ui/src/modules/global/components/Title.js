import styled from "styled-components";

const Title = ({ children, align }) => {
  return <StyledTitle align={align}>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.div`
  font-size: 3rem;
  margin-bottom: 2.5rem;
  position: relative;
  text-align: ${(props) => (props.align ? props.align : "center")};

  &::after {
    content: "";
    position: absolute;
    height: 0.2rem;
    width: 5rem;
    bottom: 0.6rem;
    background-color: crimson;

    margin: ${(props) => (!props.align ? "0 auto" : "0")};
    left: 0;
    right: 0;
  }
`;
