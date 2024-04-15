import React from 'react'
import { slider_images } from '../assets/hero_images';
import { categories } from '../assets/categories';

function HeroSection() {

  return (
    <>
    <div className='hero_section_container'>
      <div className='categories_section'>
       <ul> {
          categories?.map((item, index)=>{
            return(<li>{item.name}</li>)
          })
        }</ul>
      </div>
      <div className='slider_section_container'>
        <img className='slider_img' src={slider_images[0].img} />
      </div>
    </div>
    </>
  )
}

export default HeroSection