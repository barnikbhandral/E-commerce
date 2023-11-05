import Announcment from "./components/Announcment";
import Slider from "./components/slider";
import Catagories from "./components/catagories";
import Products from "./components/products";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



function App() {
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
  );
}

export default App;
