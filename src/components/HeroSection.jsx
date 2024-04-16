import React, { useEffect, useState } from 'react'
import { slider_images } from '../assets/hero_images';
import { categories } from '../assets/categories';

function HeroSection() {

  const [images, setImages] = useState(slider_images);
  const [indicator, setIndicator] = useState(images[0].id);


  function handleRightArrow(){
    setIndicator(indicator >= slider_images.length ? 1 : indicator+1)
    
  }
  function handleLeftArrow(){
    setIndicator(indicator <= 1 ? slider_images.length : indicator-1)
  }

  function handleIndicator(e){
    setIndicator(e)
  }

  function showIndicator(){
    console.log('current indicator = ',indicator)
  }

  return (
    <>
    <div className='hero_section_container'>
      <div className='categories_section'>
       <ul className='category-list'> {
          categories?.map((item, index)=>{
            return(<li className='category-item'>{item.name}</li>)
          })
        }</ul>
      </div>

      <div className='slider_section_container'>
      <div className='left-arrow arrow' onClick={handleLeftArrow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg></div>

      <div className='right-arrow arrow' onClick={handleRightArrow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
      </div>

      <div className='indicators-container'>
        {
          slider_images.map((img, ind)=> <div className={`indicator ${img.id===indicator ? 'heighlight-indicator' : ''}`} onClick={()=>handleIndicator(img.id)}></div>)
        }
      </div>
        <img className='slider_img' src={slider_images[indicator-1].img} />
      </div>
      {/* <button onClick={showIndicator} >check Indicator</button> */}
    </div>
    </>
  )
}

export default HeroSection