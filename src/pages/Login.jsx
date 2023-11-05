import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  background-image: url(https://shorturl.at/bfpuM);
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: rgba(225, 225, 225, 0.8);
  ${mobile({width:"80%"})}
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  margin: 20px 0px 10px 60px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex-wrap: wrap;
  width: 50%;
  display: flex;
  padding: 15px 20px;
  margin: 10px;
`;
const Button = styled.button`
  width: 25%;
  border: none;
  padding: 15px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  font-size: 20px;
  color: white;
  background-color: teal;
  margin: 10px 60px;
  cursor:pointer;
`;
const InputItems = styled.div`
  width: 100%;
  display: flex;
  margin-left: 50px;
  flex-direction: column;
`;
const Link = styled.a`
  font-size: 16px;
  display:flex;
  margin:10px 60px;
  text-decoration: underline;
  cursor:pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <InputItems>
            <Input placeholder="username" />
            <Input placeholder="password" />
          </InputItems>
          <Button>Login</Button>
        </Form>
        <Link>FORGOT YOUR PASSWORD ?</Link>
        <Link>CREATE A NEW ACCOUNT </Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
