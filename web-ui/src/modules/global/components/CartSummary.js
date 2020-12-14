import { useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { cartState } from "../../../lib/recoil/atoms";
import CartItem from "./CartItem";
import Title from "./Title";
import Button from "./Button";
import { motion } from "framer-motion";

const CartSummary = () => {
  const cart = useRecoilValue(cartState);
  const [open, setOpen] = useState("cash");
  return (
    <StyledCartSummary>
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
      <div>
        <label htmlFor="cash" onClick={() => setOpen("cash")}>
          <input type="radio" id="cash" name="payment" /> Cash
        </label>
        <label htmlFor="momo" onClick={() => setOpen("momo")}>
          <input type="radio" id="momo" name="payment" /> Mobile Money
        </label>
        {open === "momo" && (
          <motion.div initial={{ y: 10 }} animate={{ y: 0 }}>
            <Detail>
              <h1>Using Mobile Money</h1>
              <Center>
                <Select name="" id="">
                  <option value="">Please select network</option>
                  <option value="">MTN Momo</option>
                  <option value="">Vodafone Cash</option>
                </Select>
                <Input placeholder="Phone Number" />
              </Center>
            </Detail>
          </motion.div>
        )}
        <label htmlFor="bank" onClick={() => setOpen("bank")}>
          <input type="radio" id="bank" name="payment" /> Bank Account
        </label>
        {open === "bank" && (
          <motion.div initial={{ y: 10 }} animate={{ y: 0 }}>
            <Detail>
              <Text>
                Place your order first and then make a bank deposit / transfer
                to our account. Enter your order number and full name in
                comments/remarks while making the transfer/deposit.
              </Text>
              <p>
                <b>BANK:</b> GHANA COMMERCIAL BANK
              </p>
              <p>
                <b>ACCOUNT NAME:</b> COASTAL FISH LIMITED
              </p>
              <p>
                <b>ACCOUNT NUMBER:</b> 00000000000
              </p>
              <Text>
                We will proceed with your order upon receipt of the
                transfer/deposit.
              </Text>
            </Detail>
          </motion.div>
        )}
        <ButtonWrapper>
          <Button fontSize={2}>Place Order</Button>
        </ButtonWrapper>
      </div>
    </StyledCartSummary>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledCartSummary = styled.div`
  h1 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  label {
    display: block;
    color: #333;
    padding-left: 2rem;
    margin: 1rem 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #222;
  border-bottom: 1px solid lightgray;
  padding: 0.5rem 0;
`;

const Detail = styled.div`
  background-color: #ddd;
  padding: 1rem;
  color: #111;
  border-radius: 0.5rem;
  transition: all 1s ease-in-out;
`;

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 2.2rem;
  margin: 1rem 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const Select = styled.select`
  outline: none;
  width: 80%;
  padding: 1rem;
  font-size: 1.6rem;
  background: #fefefe;
  border-radius: 0.5rem;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background: #fefefe;
  width: 80%;
  padding: 1rem;
  color: #333;
  margin-bottom: 1.5rem;

  border-radius: 0.5rem;
  font-size: 1.6rem;
`;

export default CartSummary;
