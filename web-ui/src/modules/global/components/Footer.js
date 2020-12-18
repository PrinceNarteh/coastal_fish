import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-left">
        <img src="/static/img/logo.png" alt="logo" />
        <p>
          Coastal Fish is a wholesale and retail sea fish company, delivering
          services to doorsteps of clients. We buy the fish from source,
          process, package it and deliver to clients on orders so they can have
          it in its freshly state and also have their sea fish even when it is
          out of season.
        </p>
      </div>
      <ul className="footer-right">
        <li className="features">
          <h2>Features</h2>
          <ul>
            <li>Convenient</li>
            <li>Accessibility</li>
            <li>Good Hygienic</li>
            <li>Seamless Service</li>
          </ul>
        </li>
        <li>
          <h2>Contact</h2>
          <ul>
            <li>No. 36, Messiah Street, Pedu Village, Cape Coast</li>
            <li>
              <img src="/static/img/icons/message.png" alt="" />
              <span>coastalfish.team@gmail.com</span>
            </li>
            <li>
              <img src="/static/img/icons/call.png" alt="" />{" "}
              <span>0244000000</span>
            </li>
            <li>
              <div className="socials">
                <a href="">
                  <img src="/static/img/icons/facebook.png" alt="" />
                </a>
                <a href="">
                  <img src="/static/img/icons/instagram.png" alt="" />
                </a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #eee;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 35% 65%;

  ul {
    list-style: none;
    padding-left: 0;
  }

  .footer-left {
    margin-left: 1.2rem;
    padding: 2rem 0;
    text-align: justify;

    img {
      width: 10rem;
      float: left;
    }

    .socials {
      img {
        width: 2.5rem;
        margin: 0.5rem;
      }
    }
  }

  .footer-right {
    padding: 2rem;
    display: flex;
    gap: 2rem;

    li {
      flex-grow: 1;
    }

    h2 {
      font-size: 1.7rem;
      color: crimson;
    }

    .features {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

{
  /* <div className="about-us">
        <Title>About Us</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at deserunt nemo
          fugit, amet quas! Illum a voluptatibus quisquam tenetur, labore cum eos at
          beatae quae nam sunt ducimus adipisci!
        </p>
      </div>
      <div>
        <Title>Contact Us</Title>
        <ul>
          
          
          
        </ul>
      </div>
      <div>
        <Title>Social Media</Title>
        <ul>
          
          <li>
            <img src="/static/img/icons/instagram.png" alt="" />
            coastal_fish
          </li>
        </ul>
      </div> */
}
