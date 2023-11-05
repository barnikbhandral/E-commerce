import styled from "styled-components"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Announcment from "../components/Announcment"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"

const Container = styled.div`
    width:100%; 
`
const Title = styled.h1`
    width:100%;
    text-align:center;
    font-weight: 500;
    margin: 10px 0;
`
const Top = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const TopLeft = styled.div`
    flex:1;
    display: flex;
    justify-content: left;

`
const TopButton = styled.button`
    margin: 30px;
    padding:13px;
    font-size: 20px;
    font-weight:500px;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" ? "white" : "black"};
    cursor:pointer;
`
const TopCenter = styled.div`
    flex:1;
    display: flex;
    justify-content: center;

`
const Texts = styled.div`
    display:flex;
`
const Text = styled.span`
    font-size: 20px;
    margin:10px;
`
const TopRight = styled.div`
    flex:1;
    display: flex;
    justify-content:right;
`
const Bottom = styled.div`
    display:flex;
    ${'' /* flex-direction: column; */}
    padding:20px
`
const ProductDetails = styled.div`
    display:flex;
    flex:1;
    padding:20px;
`

const Image = styled.img`
    width: 350px;
    height: 250px;
    
`
const Product = styled.div`
    flex:2;
    display:flex;
    flex-direction: column
`
const Details = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    padding: 20px;
    margin-left: 5%
`
const ProductName = styled.span`
    width:100%;
    font-size: 20px;
    
`
const ProductId = styled.span`
    font-size: 20px;
`
const ProductColor = styled.div`
   display: flex;
   font-size: 20px;
   align-items:center
`
const Hr = styled.hr`
    width: 98%;     
    margin:auto
`
const ProductSize = styled.span`
    font-size: 20px;
`
const Color = styled.div`
    margin-left: 10px;
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:rgb(79,102,156);
`
const Price = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: space-around;
    margin-right: 5%;
    flex-direction:column;
`
const Quantity = styled.div`
    display:flex;
    align-items:center;
    
`
const Number = styled.span`
    margin:10px;
    font-size:20px;
    font-weight:700;
`
const Amount = styled.span`
    font-size:30px;
    font-weight:500;
    color: teal;
`
const OrderDetails = styled.div`
    border: grey solid 1px;
    flex:1;
    border-radius:2%;
    height: 60vh;
    padding:20px
`
const Summary = styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height:100%
`
const SummaryText = styled.div`
    font-size:20px;
`
const SummaryPrice = styled.div`
    font-size:20px;
`
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin:10px;
    font-weight: ${props => props.type === "total" && "700"};
    font-size: ${props => props.type === "total" && "25px"};
`
const SummaryTitle = styled.h1`
    font-size:25px;
    text-align:center;
`
const Button = styled.button`
    width: 100%;
    padding:20px;
    font-size:20px; 
    margin-bottom:10px;
    color:white;
    background-color:black;
    cursor:pointer;
`
const Cart = () => {
  return (
    <>
    <Navbar />
    <Announcment />
    <Container>   
        <Title>YOUR BAG</Title>
        <Top>
            <TopLeft>
                <TopButton>CONTINUE SHOPPING</TopButton>
            </TopLeft>
            <TopCenter>
                <Texts>
                    <Text>Shopping Bag (2)</Text>
                    <Text>Your Wishlist (0)</Text>
                </Texts>
            </TopCenter>
            <TopRight>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
            </TopRight>
        </Top> 
        <Bottom>
            <Product>    
                <ProductDetails>
                    <Image src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500"></Image>
                    <Details>
                        <ProductName><b>Product :</b>  Shoes</ProductName>
                        <ProductId><b>ID  :</b> 5461321</ProductId>
                        <ProductColor color = "blue" > <b>Color :</b><Color /></ProductColor>
                        <ProductSize><b>Size  : </b>XL</ProductSize>
                    </Details>
                    <Price>
                        <Quantity>
                            <Add />
                              <Number>1</Number>
                            <Remove />
                        </Quantity>
                        <Amount>
                            $ 30
                        </Amount>
                    </Price>
                </ProductDetails>
                <Hr />
                <ProductDetails>
                    <Image src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500"></Image>
                    <Details>
                        <ProductName><b>Product :</b>  Shoes</ProductName>
                        <ProductId><b>ID  :</b> 5461321</ProductId>
                        <ProductColor color = "blue" > <b>Color :</b><Color /></ProductColor>
                        <ProductSize><b>Size  : </b>XL</ProductSize>
                    </Details>
                    <Price>
                        <Quantity>
                            <Add />
                              <Number>1</Number>
                            <Remove />
                        </Quantity>
                        <Amount>
                            $ 30
                        </Amount>
                    </Price>
                </ProductDetails>
            </Product>
            
                <OrderDetails>
                
                    <Summary>
                    <SummaryTitle>Order Details</SummaryTitle>
                        <SummaryItem>
                            <SummaryText>Subtotal</SummaryText>
                            <SummaryPrice>$ 80</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>Estimated shipping</SummaryText>
                            <SummaryPrice>$ 6.5</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>Festive Discount</SummaryText>
                            <SummaryPrice>-$ 6.5</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem type= "total">
                            <SummaryText>Total</SummaryText>
                            <SummaryPrice>$ 80</SummaryPrice>
                        </SummaryItem>
                        <Button>Order Now</Button>
                    </Summary>
                </OrderDetails>
        </Bottom>
    </Container>
    <NewsLetter />
    <Footer />
    </>
  )
}

export default Cart