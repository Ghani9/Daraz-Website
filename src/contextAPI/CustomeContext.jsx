import React, { useState } from 'react'
import { createContext } from 'react'

export const DarazContext = createContext();

function CustomeContext({children}) {

  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [isClick, setIsClick] = useState(false);
  const [loginPageFlag, setLoginPageFlag] = useState(false);
  const [signUpPageFlag, setSignUpPageFlag] = useState(false);

  return (
    <DarazContext.Provider value={{loginPageFlag, setLoginPageFlag, signUpPageFlag, setSignUpPageFlag, product, products, setProducts, setProduct, isClick, setIsClick}} >
      {children}
    </DarazContext.Provider>
  )
}

export default CustomeContext;