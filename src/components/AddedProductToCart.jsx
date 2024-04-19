import React, { useContext, useState } from 'react'
import { DarazContext } from '../contextAPI/CustomeContext'

function AddedProductToCart() {
  const {cartProduct} = useContext(DarazContext);


  return (
    <>
       <div className='selected-order-container'>

      <SelectAllProductsInCart />
      {
        cartProduct.map((product, ind)=> <ProductAddedtoCart product={product} /> )
      }
      </div>
    </>
  )
}

export default AddedProductToCart

function ProductAddedtoCart({product}){

  const {setCartProduct} = useContext(DarazContext);

  const [productQuantity, setProductQuantity] = useState(0)

  function hanldeIncreaseQuantity(e){
    // if(productQuantity === product.stock ){
    //   e.target.disabled
    // }
    // setProductQuantity(productQuantity >= product.stock ? product.stock : productQuantity+1)
    setProductQuantity(productQuantity+1)
  }
  function hanldeDecreaseQuantity(e){
    if(productQuantity<=0){
      e.target.disabled
      e.target.style.backgroundColor='rgba(209, 209, 209,0.4)';
    }
    else{
      e.target.style.backgroundColor='rgba(209, 209, 209,1)';
      setProductQuantity(productQuantity-1)
    }
    // setProductQuantity(productQuantity <= 0 ? 0 : productQuantity-1)
  }

  function handleProductSelect(){

  }

  return(
    <>
          <div className='listSelectedItemsCard-container'>
        <div className='item-img-info'>
        <input type='checkbox' onChange={handleProductSelect} />
          <img className='product-image' src={product.thumbnail} />
          <div className='productName-info'>
          <p className='productName'>{product.title}</p>
          <p className='productType'>{product.category}</p>
          <div className='little-tags'>
            <p>Daraz Verified</p>
            <p>Best Price</p>
          </div>
          </div>
        </div>
        <div className='price-and-discount-container'>
          <p className='price'>Rs. {product.price}</p>
          <p className='discount'>-{product.discountPercentage}%</p>
          <div className='like-and-deletefromCart-icons'>
          <span onClick={()=>{
            // setCartProduct([...cartProduct, cartProduct.])
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke=" currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="deleteIcon icon lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="heartIcon icon lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </div>
        </div>
        <div className='counter-container'>
          <button className='counterBtn' onClick={hanldeDecreaseQuantity}>-</button>
          <p className='counter'>{productQuantity}</p>
          <button className='counterBtn' onClick={hanldeIncreaseQuantity} >+</button>
        </div>
      </div>
    </>
  )
}

function SelectAllProductsInCart(){
  const {totalProductPrice, setTotalProductPice,cartProduct, setCartProduct,setSelectedProductInCart,selectedProductsInCart} = useContext(DarazContext);

  function handleSelectAllProducts(e){
    let intialval =0
    // if(e.target.checked === true)
    // setSelectedProductInCart(cartProduct)
    setTotalProductPice(cartProduct.reduce((accum, prod)=>accum+=prod.price,intialval))
  }

  function handleDeleteAllProducts(e){
    setSelectedProductInCart([])
    setCartProduct([])
  }

console.log(selectedProductsInCart)
  return(
    <>
    <div className='numberOfItemsSelected-container'>
        <input type='checkbox' onChange={handleSelectAllProducts} />
        <p className='top-section-text'> SELECT ALL ({cartProduct.length} ITEM(S)) 
        <span onClick={handleDeleteAllProducts}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg> DELETE
          </span></p>
      </div>
    </>
  )
}