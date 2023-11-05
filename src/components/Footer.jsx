import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    display:flex;
    margin:3px;
    ${mobile({flexDirection:"column"})}
`
const Left = styled.div`
    flex:1;
    padding:20px
`
const Logo = styled.h1`
    margin-top: 20px;
    font-size:50px
`
const Desc = styled.p`
    font-size:20px;
    padding: 30px 40px 30px 0;
`
const SocialIcons = styled.div`
    display:flex;

`
const Icons = styled.div`
    width: 40px;
    height:40px;
    border-radius:50%;
    color: white;
    background-color: #${props => props.color};
    display:flex;
    justify-content:center;
    align-items: center;
    margin-right:20px;
    cursor:pointer;

    
`
const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:"none"})}
`
const Title = styled.h1`
    margin:20px 0 30px ; 
`
const List = styled.div`
    display:flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    font-size: 20px;
    list-style: none;
    width:50%;
    margin-bottom:10px;
    cursor:pointer;
`
const Right = styled.div`
    flex:1;
    padding:20px;
   
`
const ContactItem = styled.div`
    font-size: 20px ;
   display: flex;
   align-items: center;
   margin-bottom: 30px;
   cursor:pointer;
`
const Icon = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    transform: scale(1.2);
    padding-right:10px;
    color:teal;
    
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHOPPING.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam ullamcorper hendrerit.
                Cras tortor nisl, dictum in varius in, volutpat eu nibh. Ut molestie orci at metus aliquam finibus.
                Vestibulum porttitor purus risus, et congue elit semper non. 
                </Desc>
            <SocialIcons>
                <Icons color="3b5999" >
                    <Facebook />
                </Icons>
                <Icons color="e4405f">
                    <Instagram />
                </Icons>
                <Icons color="55acee">
                    <Twitter />
                </Icons>
                <Icons color="e60023">
                    <Pinterest />
                </Icons>
            </SocialIcons>
        </Left>
        <Center>
            <Title>UseFul Links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>WishList</ListItem>
            <ListItem>WishList</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Terms</ListItem>
            </List>
           
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>
            <Icon>
            <Room />
            </Icon>
            Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
            </ContactItem>
            <ContactItem>
            <Icon>
            <Phone />
            </Icon> +91 1234567890
            </ContactItem>
            <ContactItem>
            <Icon>
            <MailOutline />
            </Icon>contact@Shopping.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer