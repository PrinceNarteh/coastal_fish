import styled from "styled-components";
import CartItem from "./CartItem";

const CartList = ({ cart }) => {
  return (
    <CartListStyled>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Product</th>
            <th>Preference</th>
            <th>Qty (Kg)</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <CartItem id={item.id} item={item} idx={idx + 1} />
          ))}
        </tbody>
      </table>
    </CartListStyled>
  );
};

const CartListStyled = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    padding: 0.5rem;
    color: #fff;
    background-color: teal;
  }

  .total {
    font-weight: bold;
    font-size: 2rem;
  }

  button {
    margin: 1rem;
  }
`;

const StyledTotal = styled.div`
  /* float: right; */
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export default CartList;
