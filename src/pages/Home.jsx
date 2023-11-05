import React from 'react'
import Navbar from '../components/Navbar'
import Slider from "../components/slider"
import Catagories from '../components/catagories'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/products'
import Announcment from '../components/Announcment'
import Footer from '../components/Footer'


const Home = () => {
  return (
  <>
      <Announcment />
      <Navbar />
      <Slider />
      <Catagories />
      <Products />
      <NewsLetter />
      <Footer /> 
    </>
    
  )
}

export default Home