import React from 'react'
import CatCard from "./Catagory/CatCard"
import  ProductCard  from './ProductCard/ProductCard'



const Container = ({data,type}) => {

      return (
      data?<div className='flex p-4 flex-wrap  content-center '>
        {type==="catagory"? data.map(cat=>(<CatCard title={cat.name} logo={cat.logo}/>)): ""}
        {type==="product"? data.map(product=>(<ProductCard title={product.title} src={product.image} price={product.price} />)): ""}
        
      </div>:""
  
  )
}

export default Container