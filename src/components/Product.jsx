import styled from "styled-components"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { mobile } from "../responsive"

const Info = styled.div`
    opacity: 0;
    display:flex;
    width:100%;
    height:100%;
    position:absolute;
    align-items:center;
    justify-content:center
    
`


const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    margin: 3px;
    flex:1;
    position: relative; 

    &:hover ${Info}{
        opacity: 1;
    }
    ${mobile({width:"100%"})}

`

const Image = styled.img`
    width: 400px;
    height:500px;
    margin: 10px 0;
`
const Icon = styled.div`

    width: 50px;
    height:50px;
    border-radius:50%;
    background-color:white;
    margin:5px;
    display:flex;
    align-items: center;
    justify-content:center;
    cursor: pointer;
    transition:all 0.5s ease;
    

    &:hover{
        background-color:#4ac6b7;
        transform: scale(1.1)
    }

`


const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.image} key={item.id}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product