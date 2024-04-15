import React from 'react'

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
        <img src='' />
        <div>
        <p>
          name
        </p>
        <p>
          Orders & Account
        </p>
        </div>
      </div>
      <div className='language'>
        <p>EN</p>
      </div>
      <div className='cart'>
        cart
      </div>
    </div>
    </>
  )
}

export default Searchbar