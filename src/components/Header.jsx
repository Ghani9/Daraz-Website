import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'

function Header() {
  return (
    <>
    <div className='header'>
    <Navbar />
    <Searchbar />
    </div>
    </>
  )
}

export default Header