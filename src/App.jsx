
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
import SignUpPage from "./components/loginAndsignupPage/SignUpPage"
import LoginPage from "./components/loginAndsignupPage/LoginPage"
import LoginInAndSignUpPages from "./components/LoginInAndSignUpPages"
import CartPage from "./components/cartPageComponent/CartPage"

function App() {

  const {isClick, loginPageFlag, signUpPageFlag, cartFlag, setCartFlag} = useContext(DarazContext);

  return (
    <>
    <div className="body">
    <Header />

   {
    cartFlag ? <CartPage /> :
    loginPageFlag || signUpPageFlag ? <LoginInAndSignUpPages /> :
    !isClick ? 
   <> <HeroSection />
    <Services />
    <FlashSale /> 
    <Categories />
    <HomePageProducts /></> : <ProductPage /> 
    }

    {/* <CartPage /> */}

    <Footer />
    </div>
    </>
  )
}

export default App
