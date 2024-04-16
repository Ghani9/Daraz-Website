import React from 'react'
import userLogo from '../assets/icons/user.png'

function Searchbar() {



  return (
    <>
    <div className='search_bar'>
      <div className='daraz_img_container'>
        <img className='daraz_img' src='https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png' />
      </div>
      <div className='searchbar_text'>
        <input type='text' className='input_searchbar' placeholder='Search in Daraz' name='searchbar' id='searchbar' >
        </input>
      </div>
      <div className='account_container'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
        <div className='user-account'>
        <p>
          Login
        </p>
        <p>
          Sign Up
        </p>
        </div>
      </div>
      <div className='language'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
        <p>EN</p>
      </div>
      <div className='cart'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      </div>
    </div>
    </>
  )
}

export default Searchbar