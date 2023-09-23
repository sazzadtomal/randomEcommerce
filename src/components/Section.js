import React from 'react'
import Container from "./Container"


const Section = ({tittle,subTittle,data,type}) => {



  return (
    <div className='mt-8'>
       <h2 className='text-2xl p-2 text-center font-bold'>{tittle}</h2>
       <h6 className='mb-2 text-md text-center'>{subTittle}</h6>
       <Container type={type} data={data}/>
          
    </div>
  )
}

export default Section