import styled from "styled-components"
import { catagories } from "../pages/data"
import CatagoriesItem from "./catagoriesItem"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`


const Catagories = () => {
  return (
        <Container>
            {catagories.map((item) => (
                <CatagoriesItem item = {item} key={item.id}></CatagoriesItem>
            ))}
        </Container>
    
  )
}

export default Catagories