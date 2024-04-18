import React, { useContext, useEffect, useState } from 'react'
import { dateOfBorth, years } from '../../assets/dateOfBirthData'
import { DarazContext } from '../../contextAPI/CustomeContext';
import { checkInputNumbers } from '../../logicComponent/checkInputLogic';

function SignUpPage() {

  const {setSignUpPageFlag, setLoginPageFlag} = useContext(DarazContext)

  const [month, setMonth] = useState('');
  const [day, setDay] = useState(0);
  const [year, setYear] = useState(0);
  const [gender, setGender] = useState('');
  const [userData, setUserData] = useState({
    phoneNumber : '',
    fullName : '',
    password : ''
  })

  useEffect(()=>{
    setMonth('');
    setDay(0);
  },[])

  
  
  function handleBacktoHome(){
    setSignUpPageFlag(false)
  }

  function gotoLoginPage(){
    setSignUpPageFlag(false)
    setLoginPageFlag(true)
  }
  function handleMonth(e){
    setMonth(e.target.value);

  }
  function handleDay(e){
    setDay(e.target.value);
  }

  function handleYear(e){
    setYear(e.target.value)
  }

  function handleGender(e){
    console.log(e.target.value)
    setGender(e.target.value)
  }

  function handleInput(e){
    if(checkInputNumbers(e.target.value)){

    }
  }



  function handleSubmit(){}

  return (
    <>
   <button className='back-to-home-page-btn' onClick={handleBacktoHome}>Back</button>
    <div className='sign-up-page-container'>
    <div className='top-section'>
      <h2 className='create-account-text'>Create your Daraz Account</h2>
      <p className='already-member-text'>Already member? <span className='anchor-text' onClick={gotoLoginPage}>Login</span> here.</p>
    </div>
    <div className='signUp-form-container'>
      <form className='form'>
      <div className='first-section-of-sign-up-form'>
        <div className='label-input'>
        <label className='form-label'>Phone Number*</label>
        <input placeholder='Please enter your phone number' name='phoneNumber' id='phoneNumber' onChange={handleInput} type='text' className='input-field' />
        <span></span>
        </div>
        <div className='label-input'>
        <label className='form-label'>Verfication Code from whatsApp*</label>
        <input placeholder='Verification Code' name='verificationCode' id='verificationCode' type='text' className='input-field' /></div>
        <div className='label-input'>
        <label className='form-label'>Password*</label>
        <input placeholder='Minimum 6 characters with a number and a letter' name='passowrd' id='password' type='text' className='input-field' /></div>

        <div className='dob-and-gender-container'>
        <div className='dob-container label-input'>
        <label className='form-label'>Date of Birth</label>
        <div>
          <select className='birth-month-selector selector' onChange={handleMonth} >
            <option selected>Month</option>
            {
              dateOfBorth.map((month,ind)=>
            <option className='month-name options' value={month.month}>{month.month}</option>
            )
            }
          </select>
          <select className='birth-day-selector selector' onChange={handleDay}>
            <option>Day</option>
          {
              dateOfBorth.map((selectedMonth,ind)=>
                month === selectedMonth.month ? selectedMonth.days.map((day, ind)=>
                <option className='day-of-month options' value={day}>{day}</option>
              ) : ''
            )
            }
          </select>
          <select className='birth-year-selector selector' onChange={handleYear}>
            <option>Year</option>
            {
              years.map((yr,ind)=> 
              <option className='year-number options' value={yr}>{yr}</option>
            )}
          </select>
          </div>
          </div>
          <div className='gender-container label-input'>
          <label htmlFor="" className='form-label'>Gender</label>
          <div className='label-input'>
            <select className='gender-selector selector' onChange={handleGender}>
              <option className='gender-type options' value='Male'>Male</option>
              <option className='gender-type options' value='Female'>Female</option>
            </select>
            </div>
          </div>
        </div>
      </div>

      <div className='second-section-of-sign-up'>
        <div className='label-input'>
          <label className='full-name-label form-label'>Full Name*</label>
          <input placeholder='Enter your first and last name' name='fullName' id='fullName' className='input-field' type='text' />
        </div>
        <div className='checkbox-signup-and-terms-container'>
          <div className='checbox-container'>
            <input className='checkbox' type="checkbox" />
            <p className='checkbox-text'>I'd like to receive exclusive offers and promotions via SMS</p>
          </div>
          <input className='submitBtn' type='submit' value='SIGN UP' onClick={handleSubmit} />
          <p >By clicking “SIGN UP”, I agree to Daraz's 
            <span className='anchor-text'>Terms of Use</span> and <span className='anchor-text'>Privacy Policy</span></p>
        </div>
        <div className='fb-google-btns-container'>
          <p>Or, sign up with</p>
          <div className='btns-container'>
          <button className='fb-btn btn'>
            <span className='btn-icon'>f</span>
            <span> Facebook </span>
          </button>
          <button className='google-btn btn'>
          <span className='btn-icon'>G+</span>
           <span>
            Google
            </span> 
          </button>
          </div>
        </div>
      </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default SignUpPage