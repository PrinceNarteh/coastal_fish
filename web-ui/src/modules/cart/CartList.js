import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { cartTotal } from "../../lib/recoil/selectors";
import CartItem from "./CartItem";

const CartList = ({ cart }) => {
  const total = useRecoilValue(cartTotal);
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
          Total: {total}
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
`;

export default CartList;
