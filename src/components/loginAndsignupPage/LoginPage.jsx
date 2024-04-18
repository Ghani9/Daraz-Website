import React, { useContext } from 'react'
import { DarazContext } from '../../contextAPI/CustomeContext'

function LoginPage() {

  const {setLoginPageFlag, setSignUpPageFlag} = useContext(DarazContext)

  function handleBacktoHome(){
    setLoginPageFlag(false)
  }

  function gotoSignUpPage(){
    setLoginPageFlag(false)
    setSignUpPageFlag(true)
  }

  return (
    <>
    <button className='back-to-home-page-btn' onClick={handleBacktoHome}>Back</button>
    <div className='loginPage-container'>
      <div className='top-section'>
        <h2 className='welcome-text'>Welcome to Daraz! Please login.</h2>
        <p>New member? <span className='anchor-link ' onClick={gotoSignUpPage}>Register</span> here.</p>
      </div>
      <div className='form-container'>
      <form className='login-form'>
        <div className='user-mail-and-password-section'>
          <div className='user-mail-container label-input'>
            <label className='' htmlFor="">Phone Number or Email</label>
            <input className='input-field' type='text' placeholder='Please enter your Phone Number or Email' />
          </div>
          <div className='password-container label-input'>
          <label htmlFor="">Password</label>
          <input className='input-field' type='text' placeholder='Please enter your password' />
          </div>
          <p className='reset-password anchor-link'>Reset Your Password</p>
        </div>
        <div className='loginBtn-and-fbgoogleBtn'>
          <button className='loginbtn'>LOGIN</button>
          <p>Or, login with</p>
          <button className='btn fb-btn'>
           <span className='btn-icon'>f</span>
            Facebook
          </button>
          <button className='btn google-btn'>
          <span className='btn-icon'>G+</span>
            Google
          </button>
        </div>
      </form>
      </div>
    </div>
    </>
  )
}

export default LoginPage