import React, { useContext, useState } from 'react'
import { DarazContext } from '../contextAPI/CustomeContext'

function CounterComponent({product, prodPrice}) {
  const {setSelectedProductInCart, selectedProductsInCart} = useContext(DarazContext);
  const [productQuantity, setProductQuantity] = useState(product.price/prodPrice)

  function priceTimesQuantity(operation){
    selectedProductsInCart.map((itm,ind)=>{
      if(itm.id === product.id){
        console.log('before op price = ',itm.price) 
        itm.price = prodPrice*
        (
          operation == '+' ?
          (productQuantity+1) : (productQuantity-1) 
        )
      }
      console.log('price= ',itm.price)
      console.log('Original price= ',prodPrice)
      return itm
     })
     console.log('in priceFunc ',productQuantity)
  }

  function hanldeIncreaseQuantity(e){
    setProductQuantity(productQuantity+1)
    priceTimesQuantity('+')
    console.log('positive = ',productQuantity+1)
   
  
  }
  function hanldeDecreaseQuantity(e){
    if(productQuantity<=1){
      e.target.disabled
    }
    else{
      setProductQuantity(productQuantity-1)
      console.log('negative = ',productQuantity-1)
      priceTimesQuantity('-')
    }
  }

  return (
    
    <>
     <div className='counter-container'>
          <button className='counterBtn' onClick={hanldeDecreaseQuantity}>-</button>
          <p className='counter'>{productQuantity}</p>
          <button className='counterBtn' onClick={hanldeIncreaseQuantity} >+</button>
        </div>
    </>

  )
}

export default CounterComponent