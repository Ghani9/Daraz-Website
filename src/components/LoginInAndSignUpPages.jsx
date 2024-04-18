import React, { useContext } from 'react'
import LoginPage from './loginAndsignupPage/LoginPage'
import SignUpPage from './loginAndsignupPage/SignUpPage'
import { DarazContext } from '../contextAPI/CustomeContext'

function LoginInAndSignUpPages() {

  const {loginPageFlag, signUpPageFlag} = useContext(DarazContext)

  return (
    <div>
     { loginPageFlag ? <LoginPage /> : <></> }
     { signUpPageFlag ? <SignUpPage /> : <></> }
    </div>
  )
}

export default LoginInAndSignUpPages