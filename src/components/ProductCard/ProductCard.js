import React from 'react'

const ProductCard = ({title,price,src}) => {
  return (
    <div className='max-w-[50%] basis-1/2 xl:max-w-[20%] xl:basis-1/5 md:max-w-[33.333%] md:basis-1/3 p-2 flex '>
    <div className='w-full h-full hover:text-orange-400   text-slate-800  border flex flex-col rounded-lg pt-6 p-2 m-auto'>
      <img className='w-40 h-32 object-contain m-auto'  src={src} />
     
        <div className='mt-4'>
          <p className=''>{title}</p>
          <p>${price}</p>
        </div>

   
    </div>
     </div>
  )
}


export default ProductCard
