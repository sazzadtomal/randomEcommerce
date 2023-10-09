import React from 'react'
import { useNavigate } from 'react-router-dom'


const CatCard = ({title,logo}) => {
  const navigate=useNavigate()
  return (
    <div className='h-36  basis-1/3  xl:basis-1/6 md:basis-1/5 p-1'>
    <div className='cursor-pointer hover:text-orange-400 text-slate-800 w-full border flex flex-col justify-center items-center rounded-lg  box-border h-full'>
      <div onClick={()=>navigate(`/${title}`)} className='text-5xl mb-2'>{logo()} </div>
      <span>{title}</span>
    </div>
     </div>
  )
}

export default CatCard