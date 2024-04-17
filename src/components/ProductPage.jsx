import React, { useContext } from 'react'
import ImageSlider from './productPageComponents/ImageSlider'
import ProductInfoAndPrice from './productPageComponents/ProductInfoAndPrice'
import ProductDeliverySection from './productPageComponents/ProductDeliverySection'
import { DarazContext } from '../contextAPI/CustomeContext'

function ProductPage() {
  const {isClick, setIsClick} = useContext(DarazContext)

  function handleBackBtn(){
    setIsClick(false)
  }

  return (
    <div>
      <button onClick={handleBackBtn} className='back-to-home-page-btn'>Back</button>
      <div className="productView-Page">
       <ImageSlider />
       <ProductInfoAndPrice />
       <ProductDeliverySection />
      </div>
    </div>
  )
}

export default ProductPage