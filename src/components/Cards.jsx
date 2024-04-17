import React, { useContext } from 'react'
import ImageSlider from './productPageComponents/ImageSlider'
import { DarazContext } from '../contextAPI/CustomeContext'

export function FlashCards({item}) {

  return (
    <div className='card'>
      <div className='card-img-container'>
      <img src={item.product_img} className='flash_card_img' /></div>
      <div className='card-info-and-price'>
      <p className='flash_card_name'>{item.product_name}</p>
      <h5 className='flash_card_price'>Rs. {item.price} </h5>
      <div className='previous-price-and-off-percent'>
      <span className='flash_card_previousPrice'><del>{item.previous_price}</del></span>
      <span className='flash_card_off_percent'>{item.percent_off}</span></div>
      </div>
    </div>
  )
}

export function CategoryCards({category}){
  return (
    <>
    <div className={`category_card ${category.id >8? 'border-top-class':''} ${category.id %8==0 ? '' : 'border-right-class'}`}>
      <img className='category_card_img' src={category.img} />
      <p className='category_card_name'>{category.category_name}</p>
    </div>
    </>
  )
}

export function ProductCard({product}){

  const {setProduct, setIsClick} = useContext(DarazContext);

  function handleProductCard(){
    setProduct(product)
    setIsClick(true);

  }

  return (
    <>
    <div className='product_card' onClick={handleProductCard}>
      <img className='product_img' src={product.images[0]} />
      <div className='product_info'>
      <p className='product_description'>{product.description}</p>
      <p className='brand_name'>{product.brand}</p>
      <p className='product_price'>Rs. {product.price} </p>
      <p className='product_rating'>Ratings</p>
      </div>
    </div>
    </>
  )
}

export function ProductPageCard({product}){

  return (
    <>
    <ImageSlider images={product.images} />
    </>
  )
}