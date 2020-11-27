import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { cartTotal } from "../../../lib/recoil/selectors";
import Button from "../components/Button";

const Checkout = () => {
  const total = useRecoilValue(cartTotal);

  return (
    <StyledCheckout>
      <Price>
        <h3>Cart Total</h3>
        <p>Ghs</p>
        <h6>{total}</h6>
      </Price>
      <Delivery>
        <h1>Delivery Info</h1>
        <form action="">
          <label class="custom-field one">
            <input type="text" required />
            <span class="placeholder">Full name</span>
          </label>

          <label class="custom-field one">
            <input type="text" required />
            <span class="placeholder">Address</span>
          </label>

          <label class="custom-field one">
            <input type="text" required />
            <span class="placeholder">Town/City</span>
          </label>

          <label class="custom-field one">
            <input type="tel" required />
            <span class="placeholder">Phone Number</span>
          </label>

          <div className="radio">
            <div>
              <input type="radio" id="pickUp" name="delivery" />
              <label htmlFor="pickUp">I'll pick it up</label>
            </div>
            <div>
              <input type="radio" id="deliver" name="delivery" />
              <label htmlFor="deliver">Deliver to me (At a fee)</label>
            </div>
          </div>
          <div className="button-wrapper">
            <Button>Checkout</Button>
          </div>
        </form>
      </Delivery>
    </StyledCheckout>
  );
};

const StyledCheckout = styled.div`
  /* background: crimson; */
  padding: 0 1rem;
`;

const Price = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #f8f7fa;
  text-align: center;
  border-radius: 0.2rem;
  padding: 1rem 1rem 2rem;

  h3 {
    color: teal;
  }

  h6 {
    font-size: 3rem;
    line-height: 2rem;
  }

  p {
    color: crimson;
  }
`;

const Delivery = styled.div`
  padding: 1rem;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }

  form {
    width: 90%;
    margin: 0 auto;

    .button-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }
  }

  .custom-field {
    position: relative;
    font-size: 1.6rem;
    padding-top: 20px;
    margin: 2rem 0;
  }

  .custom-field input {
    border: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    background: #f2f2f2;
    padding: 1rem;
    border-radius: 0.5rem;
    color: #777;
    width: 100%;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  .custom-field .placeholder {
    position: absolute;
    left: 12px;
    top: calc(50% + 10px);
    transform: translateY(-50%);
    color: #aaa;
    transition: top 0.3s ease, color 0.3s ease, font-size 0.3s ease;
  }

  .custom-field input:valid + .placeholder,
  .custom-field input:focus + .placeholder {
    top: 1rem;
    font-size: 1rem;
    color: #222;
  }

  /* ONE */
  .custom-field.one input {
    background: none;
    border: 2px solid #ddd;
    transition: border-color 0.3s ease;
  }

  .custom-field.one input + .placeholder {
    left: 8px;
    padding: 0 5px;
  }

  .custom-field.one input:valid,
  .custom-field.one input:focus {
    border-color: #777;
    transition-delay: 0.1s;
  }

  .custom-field.one input:valid + .placeholder,
  .custom-field.one input:focus + .placeholder {
    top: 1rem;
    font-size: 1.2rem;
    color: #222;
    background: #fff;
  }

  .radio {
    margin-left: 2rem;

    input {
      margin: 0.5rem;
    }
  }
`;

export default Checkout;
