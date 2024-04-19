import React, { useState } from 'react'
import { createContext } from 'react'

export const DarazContext = createContext();

function CustomeContext({children}) {

  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [isClick, setIsClick] = useState(false);
  const [loginPageFlag, setLoginPageFlag] = useState(false);
  const [signUpPageFlag, setSignUpPageFlag] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);
  const [cartFlag, setCartFlag] = useState(false)
  const [selectedProductsInCart, setSelectedProductInCart] = useState([])
  const [totalProductPrice, setTotalProductPice] = useState(0)

  return (
    <DarazContext.Provider value={{loginPageFlag, setLoginPageFlag, signUpPageFlag, setSignUpPageFlag, product, products, setProducts,selectedProductsInCart, setSelectedProductInCart, setProduct, isClick, setIsClick, cartProduct, setCartProduct,
      cartFlag, setCartFlag}} >
      {children}
    </DarazContext.Provider>
  )
}

export default CustomeContext;