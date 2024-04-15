import React from 'react'

export function FlashCards({item}) {


  return (
    <div className='card'>
      <img src={item.product_img} className='flash_card_img' />
      <p className='flash_card_name'>{item.product_name}</p>
      <h5 className='flash_card_price'>Rs. {item.price} </h5>
      <span className='flash_card_previousPrice'><del>{item.previous_price}</del></span>
      <span className='flash_card_off_percent'>{item.percent_off}</span>
    </div>
  )
}

export function CategoryCards({category}){



  return (
    <>
    <div className='category_card'>
      <img className='category_card_img' src={category.img} />
      <p className='category_card_name'>{category.category_name}</p>
    </div>
    </>
  )
}

export function ProductCard({product}){
  console.log(product)
  return (
    <>
    <div className='product_card'>
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