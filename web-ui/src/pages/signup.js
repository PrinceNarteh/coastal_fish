import Link from "next/link";
import styled from "styled-components";
import Form from "../modules/global/components/Form";
import Input from "../modules/global/components/Input";
import Label from "../modules/global/components/Label";
import Button from "../modules/global/components/Button";

const Signup = () => {
  return (
    <StyledSignup>
      <div className="content">
        <Form>
          <h1>Signup</h1>
          <Label>Full name:</Label>
          <Input />
          <Label>Email:</Label>
          <Input />
          <Label>Address:</Label>
          <Input />
          <Label>Phone number:</Label>
          <Input type="number" />
          <Label>Password:</Label>
          <Input type="password" />
          <Label>Confirm Password:</Label>
          <Input type="password" />
          <Button>Signup</Button>

          <p>
            Already have an account?{" "}
            <Link href="/login">
              <a>Login</a>
            </Link>{" "}
          </p>
        </Form>
      </div>
    </StyledSignup>
  );
};

const StyledSignup = styled.div`
  background: url("/static/img/background.jpg");
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  overflow-x: hidden;
  /* align-items: center; */

  padding: 11rem 0 5rem 0rem;

  & .content {
    width: 85%;
    margin: 0 auto;

    p {
      text-align: center;
      margin: 2rem 0;
    }

    a {
      color: crimson;
    }
  }

  h1 {
    text-align: center;
    font-size: 3rem;
  }
`;

export default Signup;
