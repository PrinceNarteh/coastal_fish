import Link from "next/link";
import styled from "styled-components";
import Form from "../modules/global/components/Form";
import Input from "../modules/global/components/Input";
import Label from "../modules/global/components/Label";
import Button from "../modules/global/components/Button";

const Login = () => {
  return (
    <StyledLogin>
      <div className="content">
        <Form>
          <h1>Login</h1>
          <Label>Email:</Label>
          <Input />
          <Label>Password:</Label>
          <Input type="password" />
          <Button>Login</Button>

          <p>
            Don't have an account?{" "}
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>{" "}
          </p>
        </Form>
      </div>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  background: url("/static/img/background.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow-x: hidden;

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

export default Login;
