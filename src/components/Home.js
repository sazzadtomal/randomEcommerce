import React from 'react'
import Hero from './Hero'
import Section from './Section'
import {useGetProductsQuery} from "../features/productsApi"

import { categories } from '../Data/data'


const Home = () => {
  const {data}=useGetProductsQuery()
  return (
    <div>
      <Hero/>
      <Section type="catagory" tittle="Featured Catagories" subTittle="Featured Catagories" data={categories}/>
      <Section type="product" tittle="Featured Products" subTittle="Featured Products" data={data}/>
    </div>
  )
}

export default Home