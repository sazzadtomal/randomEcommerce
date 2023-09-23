import React from 'react'
import ProductCard from "../components/ProductCard/ProductCard"
import {useGetProductsQuery} from "../features/productsApi"
import Container from './Container'

const Products = () => {
  
  const {data}=useGetProductsQuery()

  let products=<div>No Products Found</div>


  if(data){
    products=<Container type="product" data={data}/>
  }



  return (
    <div>{products}</div>
  )
}

export default Products