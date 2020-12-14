import styled from "styled-components";
import BillingInfo from "../modules/global/components/BillingInfo";
import CartSummary from "../modules/global/components/CartSummary";

const Checkout = () => {
  return (
    <StyledCheckout>
      <div className="billing-info">
        <BillingInfo />
      </div>
      <div className="order-summary">
        <CartSummary />
      </div>
    </StyledCheckout>
  );
};

const StyledCheckout = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10rem 0 4rem;
  display: flex;

  .billing-info {
    width: 60%;
  }

  .order-summary {
    width: 40%;
    background-color: #f5f5f5;
    padding: 2rem;
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .billing-info {
      width: 100%;
    }

    .order-summary {
      width: 100%;
    }
  }
`;

export default Checkout;
