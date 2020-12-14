import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 5rem;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  position: fixed;
  z-index: 10;
  background-color: #fff;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navigation;
