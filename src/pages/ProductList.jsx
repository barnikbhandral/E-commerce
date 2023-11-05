import styled from "@emotion/styled"
import Navbar from "../components/Navbar"
import Announcment from "../components/Announcment"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import Products from "../components/products"
import { mobile } from "../responsive"

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content:space-between;
    text-align:center;
    flex:1

`
const Filter = styled.div`
    margin: 20px;
    display:flex;
    text-align:center;
    justify-content:center;
    ${mobile({ flexDirection:"column",width:"40%"})}
    
`
const Select = styled.select`
    display: flex;
    padding: 7px;
    font-size: 20px;
    margin-right:20px;
    ${mobile({margin:"10px",justifyContent:"space-between"})}
`
const Options = styled.option`
    padding: 20 px
`
const FilterText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    margin-right:20px;    
    ${mobile({marginTop: 0})}
`
const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcment />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Options disabled selected>
                        Color
                    </Options>
                    <Options>White</Options>
                    <Options>Black</Options>
                    <Options>Red</Options>
                    <Options>Blue</Options>
                    <Options>Pink</Options>
                    <Options>Green</Options>
                </Select>
                <Select>
                    <Options disabled selected>
                        Size
                    </Options>
                    <Options>XS</Options>
                    <Options>X</Options>
                    <Options>M</Options>
                    <Options>L</Options>
                    <Options>XL</Options>
                    <Options>XLL</Options>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Options disabled selected>
                        Newest
                    </Options>
                    <Options>Price(asc)</Options>
                    <Options>Price(desc)</Options>
                    
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
        
    </Container>
  )
}
export default ProductList