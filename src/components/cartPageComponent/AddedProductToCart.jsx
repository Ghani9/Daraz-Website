import React, { useContext, useState } from 'react'
import { DarazContext } from '../../contextAPI/CustomeContext'
import ProductListAddedToCart from './ProductListAddedToCart';
import SelectDeleteAllProductsFromCart from './SelectDeleteAllProductsFromCart';

// Cart Page first section include select/delete 
//all products from cart, and shows selected product in the cart.
function AddedProductToCart() {
  const {cartProduct} = useContext(DarazContext);


  return (
    <>
       <div className='selected-order-container'>
      {/* first section include select/delete all products from cart */}
      <SelectDeleteAllProductsFromCart />
      {/* shows selected product in the cart */}
      {
        cartProduct.map((product, ind)=> <ProductListAddedToCart  product={product} /> )
      }
      </div>
    </>
  )
}

export default AddedProductToCart

