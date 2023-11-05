import styled from "styled-components"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'; 
import { sliderData } from "../pages/data";
import { useState } from "react";
import { mobile } from "../responsive"


const Container = styled.div`
    height:100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
   
`
const Arrow = styled.div`
    background-color:#fff7f7;
    height:50px;
    width:50px;
    border-radius:50%; 
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    top: 0;
    bottom:0;
    left: ${props=> props.direction === "left" && "10px"};
    right:${props=> props.direction === "right" && "10px"};
    margin:auto;
    opacity: 0.5;
    cursor:pointer;
    z-index:2;
`
const Slide = styled.div`
    display:flex;
    height:100vh;
    width:100vw;
    align-items: center;
    flex-shrink: 0;
    background-color: ${props => props.bg};
    ${mobile({flexDirection:"column"})};

`
const Wrapper = styled.div`
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
    
`
const ImgContainer = styled.div`
    flex:1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const InfoContainer = styled.div`
    flex:1;
    ${mobile({height: "auto",width: "auto", display:"flex", textAlign:"center", flexDirection:"column"})};
`
const Image = styled.img`

    ${mobile({height:"33vh",width:"100%"})};
    display:flex;   
` 

const Title = styled.h1`
    font-size: 100px;
    ${mobile({fontSize: "50px"})};
`

const Description = styled.p`
    font-size: 30px;
    padding:50px 0; 
    letter-spacing: 3px;
    width: 83%;
    ${mobile({fontSize: "25px", alignSelf:"center"})};
`

const Button = styled.button`
 padding: 10px;
 font-size: 20px;
 cursor: pointer;
 background-color: transparent;
 ${mobile({width: "80%",alignSelf:"center"})}
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (arrowDirection) => {
        
        if (arrowDirection === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1: 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1: 0)
        }

    }
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftIcon />
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderData.map(item => {
                 return(<Slide bg={item.bg}>
                <ImgContainer>
                    <Image src="https://shorturl.at/bfNPW " />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.Discription}</Description>
                    <Button>Show Now</Button>
                </InfoContainer>
            </Slide>)
            })}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightIcon />
        </Arrow>
    </Container>
  )
}

export default Slider