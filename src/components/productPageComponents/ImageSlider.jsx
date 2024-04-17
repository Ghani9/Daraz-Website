import React, { useContext, useState } from 'react'
import { DarazContext } from '../../contextAPI/CustomeContext'

function ImageSlider() {
  const {product, setProducts} = useContext(DarazContext);
  const [currentImg, setCurrentImg] = useState(0);


  function handleImg(index){
    setCurrentImg(index)
  }

  function handleRightArrow(){
    setCurrentImg(currentImg >= product.images.length-1 ? 0 : currentImg+1)
  }
  function handleLeftArrow(){
    setCurrentImg(currentImg <=  0 ? product.images.length-1 : currentImg-1)
  }

  return (
    <div className='product-image-slider'>
      <div className='selectedImage-container'>
       { product && <img className='selectedImg' src={product.images[currentImg]} /> }
      </div>
      <div className='images-container'>
        <div className='leftArrow arrow' onClick={handleLeftArrow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg></div>


        {
          product && product?.images.map((img,ind)=><img onClick={()=>handleImg(ind)} className={`product-image ${currentImg === ind ? 'borderClass' : ''}`} src={img} />)
        }
        <div className='rightArrow arrow' onClick={handleRightArrow}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg></div>
      </div>
    </div>
  )
}

export default ImageSlider