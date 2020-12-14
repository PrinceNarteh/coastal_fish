import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { totalItemsInCart } from "../../../lib/recoil/selectors";

const NavBar = () => {
  const totalItems = useRecoilValue(totalItemsInCart);
  return (
    <Wrapper>
      <a href="/" className="logo">
        CoastalFish
      </a>
      {/* <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>
              Cart <span>{totalItems}</span>
            </a>
          </Link>
        </li>
      </ul> */}
      <StyledHamburger />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 8rem;
  background-color: teal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  color: #fff;
  position: absolute;
  z-index: 5;

  & ul {
    display: flex;
  }

  & ul li {
    list-style: none;
    margin: 0 2rem;
    position: relative;
  }

  & ul li a {
    font-size: 1.8rem;
  }

  & ul li a span {
    background-color: crimson;
    position: absolute;
    top: -0.2rem;
    right: -1.8rem;
    font-size: 1.2rem;
    line-height: 2rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    text-align: center;
    z-index: 1;
  }
`;

const StyledHamburger = styled.button`
  width: 3rem;
  height: 0.3rem;
  background-color: #fff;
  position: relative;
  height: 3rem;
  width: 3rem;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 2.8rem;
    height: 0.3rem;
    background-color: #fff;
    top: 0rem;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 2.8rem;
    height: 0.3rem;
    background-color: #fff;
    top: 2.5rem;
  }
`;

export default NavBar;
