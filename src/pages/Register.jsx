import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    background-image: url(https://shorturl.at/bfpuM);
    width:100vw;
    height:100vh;
    background-size: cover;
    display: flex;
    align-items:center;
    justify-content:center;
    

`
const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color: rgba(225,225,225,0.8);
    ${mobile({width:"80%",})}
    
`
const Title = styled.h1`
    font-size: 40px;
    font-weight:300;
    margin: 20px 0px 10px 60px;
    
`
const Form = styled.form`   
    display:flex;
    flex-wrap:wrap;
`
const Input = styled.input`
    flex-wrap: wrap;
    min-width:35%;
    display: flex;
    padding:15px 20px;
    margin: 10px 
    
`
const Consent = styled.span`
    font-size:20px;
    margin:20px 60px;    
`
const Button = styled.button`
    width:40%;
    border: none;
    padding:15px;
    margin-bottom: 20px; 
    letter-spacing:2px;
    font-size: 20px;
    color: white;
    background-color: teal;
    margin-left: 60px;
    cursor:pointer;
    ${mobile({marginLeft:"17%"})}
`
const InputItems = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;

`

const Register = () => {
  return (
    <Container>
      <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <InputItems>
                    <Input placeholder="first name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                </InputItems>
                <Consent>By Creating an Account, I Consent to processing of my data in accordance to the PRIVACY POLICY.</Consent>
                <Button>CREATE</Button>
            </Form>
            
      </Wrapper>  
    </Container>
  )
}

export default Register