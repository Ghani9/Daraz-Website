import React, { useContext } from 'react'
import { DarazContext } from '../../contextAPI/CustomeContext';

function SelectDeleteAllProductsFromCart() {
  const {totalProductPrice,setCheckBoxState, checkBoxState, setTotalProductPice,cartProduct, setCartProduct,setSelectedProductInCart,selectedProductsInCart} = useContext(DarazContext);

  function checkBoxesFlag(flag){
    console.log('helo')
    cartProduct.map((status, ind)=>{
      console.log('jy',ind)
      setCheckBoxState([flag])
    })
  }

  function handleSelectAllProducts(e){
    if(e.target.checked === true){
    setSelectedProductInCart(cartProduct)
  }
  else {
  setSelectedProductInCart([])
}
  }

  function handleDeleteAllProducts(e){
    setSelectedProductInCart([])
    setCartProduct([])
    setCheckBoxState([])
  }

  return(
    <>
    <div className='numberOfItemsSelected-container'>
        <input type='checkbox' onChange={handleSelectAllProducts} />
        <p className='top-section-text'> SELECT ALL ({selectedProductsInCart.length} ITEM(S)) 
        <span onClick={handleDeleteAllProducts}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg> DELETE
          </span></p>
      </div>
    </>
  )
}

export default SelectDeleteAllProductsFromCart