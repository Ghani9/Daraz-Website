import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductCard } from './Cards'

function HomePageProducts() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getProducts()
  },[])

  async function getProducts(){
    try{

      const response = await axios.get('https://dummyjson.com/products');
      const res = await response.data.products;
      // console.log(response.data.products)
      setProducts(res);
    }catch(e){
      console.log('Error = ', e)
    }
  }

  return (
    <>
    <h3>Just For You</h3>
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
    </>
  )
}

export default HomePageProducts