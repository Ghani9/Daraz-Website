import React from 'react'
import { countries_imgs, payment_methods_imgs} from '../assets/footer_imgs'
import pci from '../assets/icons/pci.png'
import daraz from '../assets/icons/daraz.png'
import darazQR from '../assets/icons/darazQR.png'
import applestore from '../assets/icons/applestore.png'
import playstore from '../assets/icons/playstore.png'
import appgallery from '../assets/icons/appgallery.png'
import { SocialIcon } from 'react-social-icons'


function Footer() {
  return (
    <>
    <div className='footer-container'>
    <div className='section-1'>
      <div className='customer-care-section'>
        <h3 className='title'>Customer Care</h3>
        <ul className='customer-care-list list'>
          <li className='list-item'><a className='anchor-tag' href='#'>Help Center</a></li>
          <li className='list-item'><a className='anchor-tag' href='#'>How to Buy</a></li>
          <li className='list-item'><a className='anchor-tag' href='#'>Corporate & Bulk Purchasing</a></li>
          <li className='list-item'><a className='anchor-tag' href='#'>Returns & Refunds</a></li>
          <li className='list-item'><a className='anchor-tag' href='#'>Daraz Shop</a></li>
          <li className='list-item'><a className='anchor-tag' href='#'>Contact Us</a></li>
          <li className='list-item'><a className='anchor-tag' href='#'>Purchase Protection</a></li>
          <li className='list-item'><a className='anchor-tag' href='#'>Daraz Pick up Points</a></li>
        </ul>
      </div>
      <div className='make-money-with-us-section'>
        <h3 className='title'>Make Money With Us</h3>
        <ul className=' list'>
          <li className='list-item'><a className='anchor-tag' href='#'>Daraz University</a></li>
          <li className='list-item'><a className='anchor-tag' href='#'>Sell on Daraz</a></li>
          <li className='list-item'><a className='anchor-tag' href='#'>Join Daraz Affiliate Program</a></li>
        </ul>
      </div>
    </div>

    <div className='section-2'>
      <h3 className='title'>Daraz</h3>
      <ul className='list'>
        <li className='list-item'><a className='anchor-tag' href='#'>About Us</a></li>
        <li className='list-item'><a className='anchor-tag' href='#'>Digital Payments</a></li>
        <li className='list-item'><a className='anchor-tag' href='#'>Daraz Donates</a></li>
        <li className='list-item'><a className='anchor-tag' href='#'>Daraz Blog</a></li>
        <li className='list-item'><a className='anchor-tag' href='#'>Terms & Conditions</a></li>
        <li className='list-item'><a className='anchor-tag' href='#'>Privacy Policy</a></li>
        <li className='list-item'>NTN Number : 4012118-6</li>
        <li className='list-item'>STRN Number : 1700401211818</li>
        <li className='list-item'><a className='anchor-tag' href='#'>Online Shopping App</a></li>
        <li className='list-item'><a className='anchor-tag' href='#'>Online Grocery Shopping</a></li>
        <li className='list-item'><a className='anchor-tag' href='#'>Daraz Exclusive</a></li>
      </ul>
    </div>

    <div  className='section-3'>
      <div className='daraz-international'>
      <h3 className='title'>Daraz International</h3>
      <div className='countries'>
        {countries_imgs?.map((country, ind)=>{ 
       return ( 
        <div className='country'>
       <img className='country_img' src={country.image} />
        <p className='country_name'>{country.name}</p>
        </div>
      )
        })}
      </div>
      </div>

      <div className='payment-method'>
        <h3 className='title'>Payment Methods</h3>
        <div className='payment-icon-section'>
          {
            payment_methods_imgs?.map((payment_icons, ind)=> <img className='payment-icon' src={payment_icons.img} />)}
        </div>
      </div>

      <div className='verified-section'>
        <h3 className='title'>Verified by</h3>
        <img className='verified-img' src={pci} />
      </div>
    </div>

    <div className='section-4'>
      <div className='exclusive-deals-section'>
        <h3 className='title'>Exclusive Deals and Offers!</h3>
        <div className='icons-container'>
        <div className='first-part'>
          <div className='qr-code'>
            <img className='daraz-qr' src={darazQR} />
          </div>
          <div className='appStores-container'>
            <img className='appstore' src={applestore} />
            <img className='appstore' src={playstore} />
            <img className='appstore' src={appgallery} />
          </div>
        </div>
        <div className='daraz-happy-shopping'>
          <img className='daraz-img' src={daraz} />
          <div className='content'>
            <p className='happy-shopping'>Happy Shopping</p>
            <p className='download-app'>Download App</p>
          </div>
        </div>
        </div>
      </div>

      <div className='follow-us-section'>
        <h3 className='title'>Follow Us</h3>
        <div className='socials-imgs-container'>
          <SocialIcon className='social-icons' style={{ height: 40, width: 40 }} url='facebook' />
          <SocialIcon className='social-icons' style={{ height: 40, width: 40 }} url='x' />
          <SocialIcon className='social-icons' style={{ height: 40, width: 40 }} url='instagram' />
          <SocialIcon className='social-icons' style={{ height: 40, width: 40 }} url='youtube' />
          <SocialIcon className='social-icons' style={{ height: 40, width: 40 }} url='dribbble' />
         
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer