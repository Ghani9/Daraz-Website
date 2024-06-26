import React from 'react'
import { categories_with_imgs } from '../assets/categories'
import { CategoryCards } from './Cards'

function Categories() {
  return (
    <>
    <div className='category-section-container'>
    <h3>Categories</h3>
    <div className='category_card_container'>
      {
        categories_with_imgs?.map((category, index)=>
        <CategoryCards category={category} />
      )
      }
    </div>
    </div>
    </>
  )
}

export default Categories