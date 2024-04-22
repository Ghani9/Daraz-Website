import React, { useContext, useEffect, useState } from 'react'
import { DarazContext } from '../../contextAPI/CustomeContext'

//Product Page 
function ProductInfoAndPrice() {
  const {product, cartProduct, checkBoxState, setCheckBoxState, setCartProduct} = useContext(DarazContext)
  const [quantityCounter, setQuantityCounter] = useState(0)

  useEffect(()=>{
    setQuantityCounter(0)
  },[product])

  function handleDecreaseCounter(e){
    if(quantityCounter<=0){
      e.target.disabled
      e.target.style.backgroundColor='rgba(209, 209, 209,0.4)';
    }
    else{
      e.target.style.backgroundColor='rgba(209, 209, 209,1)';
    }
    setQuantityCounter(quantityCounter <= 0 ? 0 : quantityCounter-1)
  }
  function handleIncreaseCounter(e){
    if(quantityCounter === product.stock ){
      e.target.disabled
    }
    setQuantityCounter(quantityCounter >= product.stock ? product.stock : quantityCounter+1)
  }

  function handleAddToCart(){
    if(!cartProduct.includes(product)){
    setCartProduct([...cartProduct, product])
  }
  }

  return (
    <>
    <div className='productInfo-and-buy_cart-Container'>
      <div className='product-title-and-ratings-container'>
      <h2 className='product-title'>{product.title}</h2>
      <div className='ratings-and-icons-container'>
        <div className='rating-and-brandName'>
        <p className='ratings'>{product.rating} Ratings</p>
        <p className='brand-name'>{product.brand} Brand</p>
        </div>
        <div className='share-and-like-icons'>

        </div>
      </div>
      </div>

      <hr />

        <div className='price-and-discount-container'>
        <h1 className='product-current-price'>Rs. {product.price}</h1>
        <p className='previous-price-and-discount'><span className='product-prevoius-price'>previous Price</span> <span className='discount-percent'>{product.discountPercentage}%</span></p>
        </div>
      <div className='quantity-and-buy_cart-container'>
        <div className='quantity-container'>
          <p>Quantity</p>
          <div className='quantity-counter'>
            <button className='decrease-quantity-btn quantity-btn' onClick={handleDecreaseCounter}>-</button>
            <p className='quantity-value'>{quantityCounter}</p>
            <button className='increase-quantity-btn quantity-btn' onClick={handleIncreaseCounter}>+</button>
          </div>
        </div>
        <div className='buy-and-addCart'>
          <button className='btn buy-btn'>Buy Now</button>
          <button className='btn add-to-cart-btn' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductInfoAndPrice