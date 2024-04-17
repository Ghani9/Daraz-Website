
import { useContext } from "react"
import Categories from "./components/Categories"
import FlashSale from "./components/FlashSale"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import HomePageProducts from "./components/HomePageProducts"
import Services from "./components/Services"
import ImageSlider from "./components/productPageComponents/ImageSlider"
import { DarazContext } from "./contextAPI/CustomeContext"
import ProductInfoAndPrice from "./components/productPageComponents/ProductInfoAndPrice"
import ProductDeliverySection from "./components/productPageComponents/ProductDeliverySection"
import ProductPage from "./components/ProductPage"
import RatingComponent from "./components/RatingComponent"

function App() {

  const {isClick} = useContext(DarazContext);

  return (
    <>
    <div className="body">
    <Header />

   {
    !isClick ? 
   <> <HeroSection />
    <Services />
    <FlashSale /> 
    <Categories />
    <HomePageProducts /></> : ''
    }
    { isClick ? 
    <>
    <ProductPage />
    </>
     : <h1>hey</h1>}

    <Footer />
    </div>
    </>
  )
}

export default App
