import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  cartState,
  increaseQty,
  descreaseQty,
  removeFromCart,
} from "../../lib/recoil/atoms";

const CartItem = ({ item, idx }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const { name, price, productImage, quantity, preference, id } = item;

  const handleIncreaseQty = (id) => {
    increaseQty(cart, setCart, id);
  };

  const handleDecreaseQty = (id) => {
    descreaseQty(cart, setCart, id);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(cart, setCart, id);
  };

  return (
    <CartItemStyled>
      <td>{idx}.</td>
      <td>
        <div className="item-info">
          <img src={productImage} alt="" />
          <div className="item-detail">
            <h4>{name}</h4>
            <p>GH¢ {price}</p>
            <button
              className="remove-btn"
              onClick={() => handleRemoveFromCart(id)}
            >
              Remove
            </button>
          </div>
        </div>
      </td>
      <td>{preference}</td>
      <td>
        <div className="item-inc">
          <button className="btn" onClick={() => handleDecreaseQty(id)}>
            &lsaquo;
          </button>
          {quantity}
          <button className="btn" onClick={() => handleIncreaseQty(id)}>
            &rsaquo;
          </button>
        </div>
      </td>
      <td>GH¢ {price * quantity}</td>
    </CartItemStyled>
  );
};

const CartItemStyled = styled.tr`
  td {
    padding: 0.5rem;
  }

  td img {
    width: 8rem;
    height: 8rem;
    margin-right: 1rem;
  }

  .item-info {
    display: flex;
    flex-wrap: wrap;
  }

  .item-detail {
    line-height: 2.7rem;
  }

  .item-inc {
    display: flex;
    align-items: center;
  }

  .btn {
    border: none;
    font-size: 3.5rem;
    background-color: transparent;
    line-height: 1rem;
    padding: 1rem;
    border-radius: 50%;
    text-align: center;
    margin: 1rem;
    color: #000;
    cursor: pointer;
    outline: none;
  }

  .remove-btn {
    background-color: crimson;
    padding: 0.5rem 1rem;
    color: #fff;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    cursor: pointer;
    margin: 0;
  }

  @media (max-width: 460px) {
    img {
      display: none;
    }
  }
`;

export default CartItem;
