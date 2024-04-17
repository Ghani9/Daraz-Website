import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ProductCard } from './Cards'
import { DarazContext } from '../contextAPI/CustomeContext';

function HomePageProducts() {

  const {products, setProducts} = useContext(DarazContext);

  useEffect(()=>{
    getProducts()
  },[])

  async function getProducts(){
    try{

      const response = await axios.get('https://dummyjson.com/products');
      const res = await response.data.products;
      setProducts(res);
    }catch(e){
      console.log('Error = ', e)
    }
  }

  return (
    <>
    <div className='product-section-container'>
    <h3 className='product-title'>Just For You</h3>
    <div className='product_container'>
      {
        products?.map((item, ind)=>{
          return <ProductCard product={item} />
        })
      }
    </div>
    <div className='load_more_btn'>
     <span> Load More </span>
    </div>
    </div>
    </>
  )
}

export default HomePageProducts