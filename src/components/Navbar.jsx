import { Menu, Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import { mobile } from "../responsive"



const Container = styled.div`
    height:60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({padding: "10px"})}
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    ${mobile({display:"none"})}
    
`
const Language = styled.span`
    font-size: 14px;
    cursor:pointer;
    ${'' /* ${mobile({display:"none"})} */}
`
const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex; 
    align-items:center;
    width:40%;
    padding:5px;
    margin-left: 25px;
    ${'' /* ${mobile({width:"100%",marginLeft:0,display:"none"})} */}
    
`
const Input = styled.input`
    border:none;
    padding:5px 10px;
    width:90%;
    ${mobile({width:"50px"})}
`

const Logo = styled.h1`
    font-weight: bold;
    cursor:pointer
`

const Center = styled.div`
    flex:1;
    text-align:center;
    ${mobile({textAlign: "left"})}
`
const Right = styled.div`
    flex:1;
    display: flex;
    justify-content:flex-end;
    align-items:center;
    ${mobile({width:"100%",marginLeft:0,display:"none"})}
`


const HeaderRightItems = styled.div`
    font-size:14px;
    margin-right:25px;
    cursor: pointer;
`
const Navbar = () =>  {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'>
                    </Input>
                    <Search style={{color:"grey", fontSize: 20 }}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>SHOPPING.</Logo>
            </Center>
            <Right>
                <Menu />
                <HeaderRightItems>REGISTER</HeaderRightItems>
                <HeaderRightItems>LOG IN</HeaderRightItems>
                <HeaderRightItems>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </HeaderRightItems>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar