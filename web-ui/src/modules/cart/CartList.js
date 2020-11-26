import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { cartTotal } from "../../lib/recoil/selectors";
import Button from "../global/components/Button";
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="total">Total:</td>
            <td className="total"> {total}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Button>Checkout</Button>
            </td>
          </tr>
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
