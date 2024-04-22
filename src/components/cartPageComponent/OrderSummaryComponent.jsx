import React, { useContext } from 'react'
import { DarazContext } from '../../contextAPI/CustomeContext';


function OrderSummaryComponent() {
  const {selectedProductsInCart,totalProductPrice, cartProduct} = useContext(DarazContext);
  function checkOutFunction(){
    console.log(selectedProductsInCart)
  }

  function calculateTotalPrice(){
  //  return selectedProductsInCart.reduce((prev, curr)=> prev + curr.price ,0)
  }

  return(
    <>
      <div  className='order-summary-container'>
        <p className='orderSummary-title'>Order Summary</p>
        <div className='subtotal-div'>
          <p className='summary-text'>Subtotal ({selectedProductsInCart.length} items)</p>
          <p className='price-text'>
            {calculateTotalPrice()}
          </p>
        </div>
        <div className='subtotal-div'>
          <p className='summary-text' >Shipping Fee</p>
          <p className='price-text'>135</p>
        </div>
        <div className='voucher-class'>
          <input className='voucher-text-area' placeholder='Enter Voucher Code' type='text' />
          <input className='voucherBtn' value='APPLY'  type='button' />
        </div>
        <div className='subtotal-div'>
          <p className='total-text'>Total</p>
          <p className='total-price'>{selectedProductsInCart.length == 0 ? 0: calculateTotalPrice()+135}</p>
        </div>
        <button className='checkout-btn' onClick={checkOutFunction} >PROCEED TO CHECKOUT</button>
      </div>
    </>
  )
}

export default OrderSummaryComponent