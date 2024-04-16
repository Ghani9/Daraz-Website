
import Categories from "./components/Categories"
import FlashSale from "./components/FlashSale"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import HomePageProducts from "./components/HomePageProducts"
import Services from "./components/Services"

function App() {

  return (
    <>
    <div className="body">
    <Header />
    <HeroSection />
    <Services />
    <FlashSale /> 
    <Categories />
    <HomePageProducts />
    <Footer />
    </div>
    </>
  )
}

export default App
