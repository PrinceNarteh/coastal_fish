import styled from "styled-components";
import Title from "../components/Title";

const Features = () => {
  return (
    <StyledFeatures>
      <Title>Why Patronize Coastal Fish</Title>

      <div className="cards">
        <div className="card">
          <div className="center-all">
            <img src="/static/img/icons/process.png" alt="" />
            <h2>Processed Assorted Fishes</h2>
            <p>
              Coastal Fish serves you with varieties of Smoked, Fried and Fresh fishes.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="center-all">
            <img src="/static/img/icons/stress.png" alt="" />
            <h2>Conveniently Reduce Stress</h2>
            <p>
              We give you a seamless service delivery that relieves you off any stress in
              accessing fish.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="center-all">
            <img src="/static/img/icons/keys.png" alt="" />
            <h2>Accessibility to sea fish</h2>
            <p>
              Coastal Fish provides you with digital platform where you can order fish of
              your choice
            </p>
          </div>
        </div>
        <div className="card">
          <div className="center-all">
            <img src="/static/img/icons/hygiene.png" alt="" />
            <h2>Good Hygienic fish processing</h2>
            <p>
              Coastal Fish has well trained partners who adhere to best hygienic
              practices.
            </p>
          </div>
        </div>
      </div>
    </StyledFeatures>
  );
};

export default Features;

const StyledFeatures = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 5rem;

  h2 {
    line-height: 2.5rem;
    text-align: center;
    text-transform: capitalize;
    margin: 1rem 0;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-content: center;

    .card {
      min-height: 15rem;
      flex-grow: 1;
      flex-basis: 20rem;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
      background-color: #3e4346;
      cursor: pointer;
      transition: background-color 0.25s ease;
      border: 2px solid #3e4346;
      display: inline-block;
      border-radius: 4px;
      position: relative;
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 4rem;

        img {
          width: 8rem;
          position: absolute;
          top: -4rem;
          left: 50%;
          transform: translateX(-50%)
        }

        h2 {
          font-size: 2rem;
          font-weight: 700;
        }

        p {
          line-height: 2rem;
          text-align: center;
        }
      }
    }
  }
`;
