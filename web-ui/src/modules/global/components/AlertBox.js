import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cartState } from "../../../lib/recoil/atoms";

const AlertBox = ({ handleOpenAlert }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const router = useRouter();

  const handleCloseAlert = () => {
    setCart([]);
    handleOpenAlert(false);
    router.push("/products");
  };

  return (
    <StyledAlertBox>
      <div className="background"></div>
      <div className="alert-box">
        <img src="/static/img/icons/check.png" alt="" />
        <header>Success</header>
        <p>Fish has been ordered.</p>
        <button onClick={handleCloseAlert}>Close</button>
      </div>
    </StyledAlertBox>
  );
};

export default AlertBox;
const StyledAlertBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
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
    transform: translate(-50%, -50%);
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
