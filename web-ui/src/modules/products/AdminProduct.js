import styled from "styled-components";
import Button from "../global/components/Button";

const AdminProduct = ({ product }) => {
  const { name, productImage, price } = product;

  return (
    <ProductStyled className="product">
      <div className="product__image">
        <img src={productImage} alt="" />
      </div>
      <div className="product__content">
        <h1>{name}</h1>
        <Item>
          <p>Price</p>
          <p>GH{price}</p>
        </Item>
        <Item>
          <p>In Stock</p>
          <p>Yes</p>
        </Item>
        <ActionArea>
          <Button>Edit</Button>
          <Button danger>Delete</Button>
        </ActionArea>
      </div>
    </ProductStyled>
  );
};

const ProductStyled = styled.div`
  width: 29rem;
  min-height: 30rem;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 17px;
  transition: 0.3s ease-in-out 0s;

  .product__image {
    width: 37rem;
    height: 22.5rem;
    border: 1px solid #fff;
    transform: rotate(11deg);
    border-radius: 5rem;
    position: absolute;
    top: -7.5rem;
    left: -5rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 10px;
    z-index: 2;
  }

  .product__image img {
    width: 100%;
    object-fit: cover;
  }

  .product__content {
    position: absolute;
    bottom: 0;
    min-height: 6rem;
    padding: 1rem 2rem;
    width: 100%;
    align-items: center;
  }

  &:hover,
  &:hover .product__actions {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionArea = styled.div`
  display: flex;
  margin: 1rem 0rem;
  justify-content: space-evenly;
`;

export default AdminProduct;
