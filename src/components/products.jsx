import styled from "styled-components"
import { productData } from "../pages/data"
import Product from "./Product"
import { mobile } from "../responsive"

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    ${mobile({width:"100%"})}
`

const Products = () => {
  return (
    <Container>
        {productData.map((item) => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products