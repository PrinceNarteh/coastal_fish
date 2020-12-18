import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cartState } from "../../../lib/recoil/atoms";

const AlertBox = ({ closeAlert }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const router = useRouter();

  const handleCloseAlert = () => {
    setCart([]);
    closeAlert(false);
    router.push("/products");
  };

  return (
    <StyledAlertBox>
      <div className="background"></div>
      <div className="alert-box">
        <img src="/static/img/icons/check.png" alt="" />
        <header>Success</header>
        <p>Thank you for doing business with us.</p>
        <button onClick={handleCloseAlert}>Close</button>
      </div>
    </StyledAlertBox>
  );
};

export default AlertBox;
const StyledAlertBox = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  top: 5rem;
  left: 0;

  .background {
    position: absolute;
    width: 100%;
    min-height: 120vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
    /* opacity: 0; */
    transition: all 0.3s ease;
  }

  .alert-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    max-width: 450px;
    width: 100%;
    background: white;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    z-index: 5;
    transition: all 0.3s ease;

    header {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
    }

    button {
      background: none;
      border: none;
      outline: none;
      background-color: gray;
      display: inline-flex;
      font-size: 1.7rem;
      font-weight: 400;
      line-height: 2rem;
      padding: 1rem 2rem;
      cursor: pointer;
      color: #fff;
      border-radius: 5px;
      margin: 0.5rem 1rem;
      transition: color 0.3s ease;
      background-color: crimson;
    }
  }
`;
