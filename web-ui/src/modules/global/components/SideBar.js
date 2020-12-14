import Link from "next/link";
import styled from "styled-components";

const SideBar = () => {
  return (
    <StyledSidebar>
      <div className="user-info">
        <h1>Mr. Prince Narteh</h1>
        <p>Admin</p>
      </div>
      <Accordion>
        <div className="accordion__item">
          <input
            type="checkbox"
            name="menu_accordion"
            id="cart"
            className="accordion__input"
          />
          <label htmlFor="cart" className="accordion__label">
            Cart
          </label>
          <div className="accordion__content">
            <ul>
              <li>
                <Link href="/admin">
                  <a>All Carts</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Search for Cart</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Edit Carts</a>
                </Link>
              </li>
              <li>
                <Link href="/admin/delete-product">
                  <a>Delete Cart</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="accordion__item">
          <input
            type="checkbox"
            name="menu_accordion"
            id="product"
            className="accordion__input"
          />
          <label htmlFor="product" className="accordion__label">
            Product
          </label>
          <div className="accordion__content">
            <ul>
              <li>
                <Link href="/admin/all-products">
                  <a>All Products</a>
                </Link>
              </li>
              <li>
                <Link href="/admin/add-product">
                  <a>Add Product</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Find a Product</a>
                </Link>
              </li>
              <li>
                <Link href="/admin/edit-product">
                  <a>Edit Product</a>
                </Link>
              </li>
              <li>
                <Link href="/admin/delete-product">
                  <a>Delete Product</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Accordion>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  min-height: 100vh;
  min-width: 25rem;
  padding-top: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: teal;
  position: fixed;

  h1 {
    font-size: 2rem;
    color: #fff;
  }
  p {
    color: #ccc;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const Accordion = styled.div`
  width: 90%;

  label {
    display: block;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(90deg);
      right: 20px;
      width: 12px;
      height: 6px;
      background-image: url('data:image/svg+xml;utf8,<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 100,0 50,50" style="fill:%23FFFFFF99;" /></svg>');
      background-size: contain;
      transition: transform 0.4s;
    }
  }

  .accordion__content {
    padding-left: 2rem;
    display: block;

    ul {
      list-style: none;
    }

    a {
      color: #ddd;
    }
  }

  .accordion__input:checked ~ .accordion__content {
    display: none;
  }

  .accordion__input:checked ~ .accordion__label::after {
    transform: translateY(-50%) rotate(0.5turn);
  }

  input {
    display: none;
  }
`;

export default SideBar;
