import React from 'react'
import { services, products_and_services } from '../assets/services'

function Services() {
  return (
    <>
    <div className='service_section_container'>
    <div className='service_section_one'>
      <ul className='serivce_list'>
        {services?.map((itm,ind)=>{
          return (
          <li className={`li_item ${itm.id%services.length==0 ? '' : 'border-class'}`}>
          <img className='service_img' src={itm.service_icon}/>
          <p className='service_name'>{itm.service_name}</p>
          </li>
        )
        })}
      </ul>
    </div>

    <div className='service_section_two'>
      {
        products_and_services?.map((item, index)=>{
          return (
            <div className={`img_and_name ${item.id%products_and_services.length==0 ? '' : 'border-class'}`}>
            <img className='product_and_service_imgs' src={item.img} />
            <p className='product_and_service_name'>{item.name}</p>
            </div>
          )
        })
      }
    </div>
    </div>
    </>
  )
}

export default Services