import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import CartList from "../modules/cart/CartList";
import { useRecoilValue } from "recoil";
import { cartState } from "../lib/recoil/atoms";
// import Checkout from "../modules/global/components/Checkout";
import AlertBox from "../modules/global/components/AlertBox";

const Cart = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const cart = useRecoilValue(cartState);

  if (cart.length === 0) {
    return (
      <EmptyCart>
        <img src="/static/img/empty-cart.png" alt="" />
        <Link href="/products">
          <a>Return to shop</a>
        </Link>
      </EmptyCart>
    );
  } else {
    return (
      <>
        <CartStyled>
          <CartList cart={cart} />
          {/* <Checkout handleOpenAlert={setOpenAlert} /> */}
          <Link href="/checkout">
            <a>Proceed to Checkout</a>
          </Link>
        </CartStyled>
        {openAlert ? <AlertBox handleOpenAlert={setOpenAlert} /> : null}
      </>
    );
  }
};

const CartStyled = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding-top: 11rem;
  width: 80%;
  margin: 0 auto;
  height: 90vh;
`;

const EmptyCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;

  a {
    background: none;
    outline: none;
    border: 2px solid crimson;
    border-radius: 5rem;
    padding: 1rem 1.5rem;
    font-size: 1.8rem;

    &:hover {
      background: crimson;
      color: white;
    }
  }
`;

export default Cart;
