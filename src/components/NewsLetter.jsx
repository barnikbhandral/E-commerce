import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile } from "../responsive"

const Container = styled.div`
    margin:3px;
    width: 100%;
    height:50vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background-color:#f9eae0;
  
`
const Title = styled.h1`
    font-size: 70px;
    ${mobile({fontSize: "50px"})}
`
const Discription = styled.div`
    font-size: 25px;
    font-weight: 300;
    margin:20px;
    ${mobile({ fontSize:"20px", textAlign:"center",})}
`
const InputContainer = styled.div`
    width:40%;
    display:flex;
    justify-content: space-between;
    ${mobile({ width:"80%"})}
`
const Input = styled.input`
    padding: 10px;
    flex: 8;
    font-size:16px 
    
`
const Button = styled.button`
    flex:0.5;
    border:1px teal solid;
    background-color:teal;
    cursor:pointer;
    color:white;
`
const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Discription>Get Timely Updates From Your Favourite Products</Discription>
        <InputContainer>
            <Input placeholder='Enter  E-mail'/>
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter