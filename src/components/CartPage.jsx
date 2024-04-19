import React, { useContext } from 'react'
import AddedProductToCart from './AddedProductToCart'
import { DarazContext } from '../contextAPI/CustomeContext'

function CartPage() {

  const {cartFlag, setCartFlag,cartProduct} = useContext(DarazContext)

  function handleBackHome(){
    setCartFlag(false)
  }

  return (
    <>
    <button onClick={handleBackHome} className='back-to-home-page-btn' >Back</button>
    <div className='cartPage-container' >
      {
    cartProduct.length === 0? <div>
    
      <h1>Please Add Product to cart</h1>
    </div> :
    <>
    <AddedProductToCart />
    <OrderSummary />
    </>
      }

    </div>
    </>
  )
}

export default CartPage

function OrderSummary(){
  const {selectedProductsInCart,totalProductPrice} = useContext(DarazContext);
  return(
    <>
      <div  className='order-summary-container'>
        <p className='orderSummary-title'>Order Summary</p>
        <div className='subtotal-div'>
          <p className='summary-text'>Subtotal (1 items)</p>
          <p className='price-text'>price</p>
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
          <p className='total-price'>{totalProductPrice}</p>
        </div>
        <button className='checkout-btn' >PROCEED TO CHECKOUT</button>
      </div>
    </>
  )
}