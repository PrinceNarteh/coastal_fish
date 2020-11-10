import styled from "styled-components";
import CartList from "../modules/cart/CartList";
import { useRecoilValue } from "recoil";
import { cartState } from "../lib/recoil/atoms";

const Cart = () => {
  const cart = useRecoilValue(cartState);
  if (cart.length === 0) {
    return (
      <EmptyCart>
        <img src="/static/img/empty-cart.png" alt="" />
      </EmptyCart>
    );
  } else {
    return (
      <CartStyled>
        <CartList cart={cart} />
      </CartStyled>
    );
  }
};

const CartStyled = styled.div`
  padding-top: 11rem;
  width: 70%;
  margin: 0 auto;
  height: 90vh;
`;

const EmptyCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Cart;
