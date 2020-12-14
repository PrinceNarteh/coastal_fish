import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { totalItemsInCart } from "../../../lib/recoil/selectors";
import Search from "../../products/Search";

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.2rem;

  span {
    line-height: 2.5rem;
    color: crimson;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  li {
    padding: 1rem;
    position: relative;
  }

  .count {
    background-color: crimson;
    position: absolute;
    top: 0.5rem;
    right: -0.5rem;
    font-size: 1.2rem;
    line-height: 2rem;
    width: 2rem;
    height: 2rem;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 20rem;
    padding-top: 2rem;
    transition: transform 0.3s ease-in-out;
    justify-content: center;
    align-items: center;

    li {
      color: #fff;
      font-size: 1.8rem;
    }
  }
  .profile-picture {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .menu {
    img {
      width: 2rem;
    }
  }
`;

const Logo = styled.div`
  /* height: 5rem; */
  width: 9rem;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`;

const RightNav = ({ open }) => {
  const totalItems = useRecoilValue(totalItemsInCart);
  const { pathname } = useRouter();

  return (
    <>
      <LogoStyled>
        <Logo>
          <img src="/static/img/logo.png" alt="" />
        </Logo>
      </LogoStyled>
      {pathname === "/products" ? <Search /> : null}
      <Ul open={open}>
        <>
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
        </>
        <>
          <li>
            <Link href="/cart">
              <a>
                Basket <span className="count">{totalItems}</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </li>
          {/* <li>
            <div className="profile-picture">
              <img src="/static/img/users/profile.jpeg" alt="" />
            </div>
            <div className="menu">
              <h1>Prince Narteh</h1>
              <ul>
                <li>
                  <img src="/static/img/icons/user.png" alt="User profile" />
                  <a href="#">My Profile</a>
                </li>
              </ul>
            </div>
          </li> */}
        </>
      </Ul>
    </>
  );
};

export default RightNav;
