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
          <div className="left">
            <CartList cart={cart} />
            {/* <Checkout handleOpenAlert={setOpenAlert} /> */}
          </div>
          <div className="right">
            <CartTotal>
              <div className="content">
                <div className="total">
                  <h2>Cart Total</h2>
                  <p>Ghs</p>
                  <h6>200</h6>
                </div>

                <Link href="/checkout">
                  <a>Proceed to Checkout</a>
                </Link>
              </div>
            </CartTotal>
          </div>
        </CartStyled>
        {openAlert ? <AlertBox handleOpenAlert={setOpenAlert} /> : null}
      </>
    );
  }
};

const CartStyled = styled.div`
  display: flex;
  grid-template-columns: 70% 30%;
  gap: 1rem;
  padding-top: 11rem;
  width: 80%;
  margin: 0 auto 2rem;
  height: 90vh;

  .left {
    width: 70%;
  }

  .right {
    width: 30%;
    position: relative;
  }

  @media (max-width: 1050px) {
    width: 90%;
  }

  @media (max-width: 830px) {
    flex-direction: column;

    .left {
      width: 100%;
    }

    .right {
      width: 100%;

      .content {
        position: inherit;
        margin-top: 2rem;

        width: 25rem;
        max-width: 100%;
        min-width: 20rem;
      }
    }
  }
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

const CartTotal = styled.div`
  width: 80%;
  margin: 0 auto;

  .content {
    position: fixed;
    min-width: 25rem;

    .total {
      background: #f5f5f5;
      text-align: center;
      padding: 1.5rem 0;
      border-radius: 5px;
      display: block;
      width: 100%;

      h2 {
        font-size: 2rem;
        color: teal;
      }

      p {
        font-size: 2rem;
        color: crimson;
      }

      h6 {
        line-height: 0;
        font-size: 3rem;
        margin: 1rem 0;
      }
    }
  }

  a {
    outline: none;
    display: block;
    /* width: 90%; */
    background: teal;
    padding: 1rem 1.5rem;
    color: #fff;
    text-align: center;
    margin: 2rem auto;
  }
`;

export default Cart;
