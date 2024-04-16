import React from 'react'
import { flash_sale } from '../assets/flash_sale_products'
import { FlashCards } from './Cards'

function FlashSale() {
  return (
    <>
    <div className='flashSale-section-container'>
    <h3>Flash Sale</h3>
    <div className='flashSale_container'>
    <div className='top_section'>
      <p>On Sale Now</p>
      <div className='counter'>
        <p>Ending in</p>
        <div className='count_down'>
          <div className='hours timer'>00</div> <span> : </span>
          <div className='minutes timer'>00</div><span> : </span>
          <div className='seconds timer'>00</div>
        </div>
      </div>
      <div className='shop_more_btn'>
        <p>SHOP MORE</p>
      </div>
    </div>

    <hr/>

    <div className='flash_cards'>
      {
        flash_sale?.map((item, index)=>{
          return (
            <>
            <FlashCards item={item}/>
            </>
          )
        })
      }
      
    </div>
    </div>
    </div>
    </>
  )
}

export default FlashSale