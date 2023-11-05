import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
    flex:1;
    margin:3px;
    position: relative;
    
`
const Info = styled.div`
    position: absolute;
    top: 0;
    width:100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const Image = styled.img`;
    width: 100%;
    height: 70vh;
    object-fit: cover;
    ${mobile({width: "100vw", height:"60vh", objectFit:"fit"})}
    
`
const Title = styled.h1`
 font-size : 50px;
 color: white;
 margin-bottom: 30px;
`
const Button = styled.button`
    font-size : 20px;
    padding: 10px 10px;
    cursor: pointer;
    background-color: white;
    color: grey;
    border:grey 1px solid;
`

const catagoriesItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
        
    </Container>
  )
}

export default catagoriesItem