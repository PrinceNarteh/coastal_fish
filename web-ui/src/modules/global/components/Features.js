import styled from "styled-components";
import Title from "../components/Title";

const Features = () => {
  return (
    <StyledFeatures>
      <Title>Features</Title>

      <div className="cards">
        <div className="card">
          <div className="center-all">
            <img src="/static/img/icons/stress.png" alt="" />
            <h2>Conveniently Reduce Stress</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="center-all">
            <img src="/static/img/icons/stress.png" alt="" />
            <h2>Accessibility to sea fish</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="center-all">
            <img src="/static/img/icons/stress.png" alt="" />
            <h2>Good Hygienic fish processing</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </StyledFeatures>
  );
};

export default Features;

const StyledFeatures = styled.div`
  max-width: 80%;
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
    justify-content: center;

    .card {
      height: 30rem;
      flex-grow: 1;
      flex-basis: 10rem;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
      background-color: #3e4346;
      cursor: pointer;
      transition: background-color 0.25s ease;
      border: 2px solid #3e4346;
      margin-right: 3%;
      margin-left: -5px;
      display: inline-block;
      border-radius: 4px;

      .center-all {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 4rem;

        img {
          width: 10rem;
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
