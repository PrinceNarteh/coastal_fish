import styled from "styled-components";

const CartItem = ({ name, quantity, price }) => {
  return (
    <StyledCartItem>
      <p>
        <strong>{`${name} x ${quantity}`}</strong>
      </p>
      <p>{`GH${price * quantity}`}</p>
    </StyledCartItem>
  );
};

const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 0.5rem 0;
  color: #555;
`;

export default CartItem;
