import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { cartState } from "../../../lib/recoil/atoms";
import CartItem from "./CartItem";
import Title from "./Title";

const CartSummary = () => {
  const cart = useRecoilValue(cartState);
  console.log(cart);
  return (
    <div>
      <Title align="left">Cart Summary</Title>
      <Row>
        <p>Product</p>
        <p>Subtotal</p>
      </Row>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <Row>
        <p>Subtotal</p>
        <p>Gh200</p>
      </Row>
      <Row>
        <p>Delivery Cost:</p>
        <p>GH10</p>
      </Row>
      <Row>
        <p>Total:</p>
        <p>GH210</p>
      </Row>

      <h1>Mode of Payment</h1>
    </div>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #222;
  border-bottom: 1px solid lightgray;
  padding: 0.5rem 0;
`;

export default CartSummary;
