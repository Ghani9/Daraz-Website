
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

function App() {

  const {isClick, loginPageFlag, signUpPageFlag} = useContext(DarazContext);

  return (
    <>
    <div className="body">
    <Header />

   {
    loginPageFlag || signUpPageFlag ? <LoginInAndSignUpPages /> :
    !isClick ? 
   <> <HeroSection />
    <Services />
    <FlashSale /> 
    <Categories />
    <HomePageProducts /></> : <ProductPage /> 
    }

    {/* {console.log('LoginPage ',loginPageFlag)}
    {console.log('SignUpPage ',signUpPageFlag)} */}


    {/* { isClick ? 
    <>
    <ProductPage />
    </>
     :''} */}

    <Footer />
    </div>
    </>
  )
}

export default App
