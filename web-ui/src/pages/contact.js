import styled from "styled-components";
import Input from "../modules/global/components/Input";
import Title from "../modules/global/components/Title";
import Button from "../modules/global/components/Button";

const ContactUs = () => {
  return (
    <StyledContactUs>
      <div className="contact-image">
        <img src="/static/img/icons/envelop.png" alt="" />
      </div>
      <div className="contact-form">
        <Title>Contact Us</Title>
        <form>
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input label="Email Address" />
          <Input label="Email Address" as="textarea" />
          <Button>Send Message</Button>
        </form>
      </div>
    </StyledContactUs>
  );
};

const StyledContactUs = styled.div`
  padding-top: 9rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .contact-image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }

  .contact-form {
    width: 50%;
    padding: 0 5rem;
  }
`;

export default ContactUs;
