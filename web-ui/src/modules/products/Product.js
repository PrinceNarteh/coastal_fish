import Link from "next/link";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { cartState, addToBasket } from "../../lib/recoil/atoms";

const Product = ({ product }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const { name, price, productImage, id, preference } = product;

  const handleAddToCart = (product) => {
    addToBasket(cart, setCart, product);
  };

  return (
    <ProductStyled className="product">
      <div className="product__image">
        <img src={productImage} alt="" />
      </div>
      <div className="product__content">
        <h3 className="product__name">{name}</h3>
        <p className="product__price">GH¢{price}</p>
      </div>
      <div className="product__actions">
        <Link href={`/products/${id}`}>
          <a className="btn">Details</a>
        </Link>
        <button className="btn" type="button" onClick={() => handleAddToCart(product)}>
          Add To Cart
        </button>
      </div>
    </ProductStyled>
  );
};

const ProductStyled = styled.div`
  width: 295px;
  height: 228px;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
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
  }

  .product__image img {
    width: 100%;
    object-fit: cover;
  }

  .product__content {
    position: absolute;
    bottom: 0;
    height: 60px;
    padding: 10px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product__name {
    display: inline;
    font-size: 1.8rem;
    line-height: 1.7rem;
    color: #555;
  }

  .product__price {
    font-size: 17px;
    color: crimson;
    font-weight: bold;
    line-height: 25px;
  }

  .product__preference {
    font-size: 1.3rem;
    color: #777;
    line-height: 1.5rem;
  }

  .product__actions {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: 0.3s ease-in;
  }

  &:hover,
  &:hover .product__actions {
    opacity: 1;
    transform: scale(1.05);
  }

  .btn {
    background: none;
    border: 2px solid #fff;
    padding: 0.8rem 1.5rem;
    color: #fff;
    border-radius: 5rem;
    font-size: 1.4rem;
    outline: none;
    cursor: pointer;
    font-weight: bold;
  }
`;

export default Product;
