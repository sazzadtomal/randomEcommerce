import React from 'react'


const CatCard = ({title,logo}) => {
  return (
    <div className='h-36  basis-1/3  xl:basis-1/6 md:basis-1/5 p-1'>
    <div className='hover:text-orange-400 text-slate-800 w-full border flex flex-col justify-center items-center rounded-lg  box-border h-full'>
      <div className='text-5xl mb-2'>{logo()} </div>
      <span>{title}</span>
    </div>
     </div>
  )
}

export default CatCard