import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    align-items:center;
    display:flex;
    justify-content:center;

`


const Announcment = () => {
  return (
    <Container>
        Hurry now! Massive Discounts on Festive Sale
    </Container>
  )
}

export default Announcment