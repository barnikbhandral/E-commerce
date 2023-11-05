import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcment from "../components/Announcment"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"

const Container = styled.div`

`
const Wrapper = styled.div`
    display: flex;

`
const ImageContainer = styled.div`
    width:50%;
    height: 80vh;
    flex:1;
    display: flex;
    justify-content: end;
`
const Image = styled.img`
    margin: 30px;
    width: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image:url("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd0%2F3b%2Fd03b2eb92ef1ffe15b2868918b5655323a490d77.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BMEN_TSHIRTSTANKS_POLO%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]")
`
const TextContainer = styled.div`
    flex:1;
    padding:20px;
    
`
const Title = styled.h1`
    padding:20px 0;
    font-size: 40px;
    font-weight:200;
`
const Desc = styled.p`
    padding:20px 0;
    padding-right:50px;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 2px;
`
const Amount = styled.h1`
    font-size: 30px;
    font-weight:200;
    margin:20px 0;
`
const Colors = styled.div`
    width:40%;
    font-size:23px;
    display: flex;
    align-items:center;
   
`
const ColorTitle = styled.span`
    margin:20px 0;
    font-size:23px;
    margin-right:10px;
`
const ColorOptions = styled.div`
    width:20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${props => props.color};
    margin-right:10px; 
    cursor: pointer;
`
const SizeContainer = styled.select`
    height: 40px;
    font-size: larger;
    width: 73px;
`
const SizeOption = styled.option`
   display:flex;
    align-item:center;  
`

const Size= styled.div`
    display: flex;
    align-items: center;
  
`
const OptionContainer = styled.div`
    display:flex;
    align-item:center;
`
const QuantityAndCart = styled.div`
    margin:30px 0;
    width:100%;
    display:flex;
    align-item:center;

`
const Quantity = styled.div`
    width:40%;
    display: flex;
    align-items: center;
    font-weight:700;
`

const Cart = styled.button`
    padding: 15px;
    background: transparent;
    border-color: teal;
    cursor: pointer;

    &: hover{
        background: rgba(0,0,0,0.1); 
    }
`
const Number = styled.div`
        display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid teal;
    border-radius: 14%;
    padding: 5px 10px;
    margin: 5px;
    font-size: x-large;
    
`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcment />
         <Wrapper>
            <ImageContainer>
                <Image src ="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd0%2F3b%2Fd03b2eb92ef1ffe15b2868918b5655323a490d77.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BMEN_TSHIRTSTANKS_POLO%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"/>
            </ImageContainer>
            <TextContainer>
                <Title>Branded T-Shirt</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis massa, fermentum sit amet vestibulum a, ullamcorper nec libero. Ut semper orci ac finibus tincidunt. Aliquam ut enim nisi. Mauris vitae sem eu purus condimentum tempor. Phasellus laoreet risus gravida, mattis metus pellentesque.</Desc>
                <Amount>$20</Amount>
                <OptionContainer>
                    <Colors>
                        <ColorTitle>Color </ColorTitle>
                        <ColorOptions color="61A3BA"/>
                        <ColorOptions color="A9A9A9"/>
                        <ColorOptions color="A0E9FF"/>
                    </Colors>
                    <Size>
                        <SizeContainer>
                            <SizeOption disabled selected>Size</SizeOption>
                            <SizeOption>XS</SizeOption>
                            <SizeOption>X</SizeOption>
                            <SizeOption>M</SizeOption>
                            <SizeOption>L</SizeOption>
                            <SizeOption>XL</SizeOption>
                            <SizeOption>XLL</SizeOption>
                        </SizeContainer>
                    </Size>
                </OptionContainer>
                <QuantityAndCart>
                      <Quantity>
                        <Remove />
                        <Number>1</Number>
                        <Add />
                      </Quantity>
                      <Cart>ADD TO CART</Cart>
                </QuantityAndCart>
            </TextContainer>
         </Wrapper>   
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product