import React from 'react'
import { categories_with_imgs } from '../assets/categories'
import { CategoryCards } from './Cards'

function Categories() {
  return (
    <>
    <h3>Categories</h3>
    <div className='category_card_container'>
      {
        categories_with_imgs?.map((category, index)=>
        <CategoryCards category={category} />
      )
      }
    </div>
    </>
  )
}

export default Categories