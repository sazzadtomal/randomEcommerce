import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-900 p-8 flex-grow-0'>
        <div className=' xl:w-4/6  xl:m-auto flex md:flex-row flex-col gap-6 justify-between pb-8   text-white'>
            
        <div className='basis-1/4  '>
                <div className='pl-1 text-sm'>
                    <h5 className='text-xl mb-4' >Contact Us</h5>
                    <div className='text-zinc-600'>
                        <p>+01545445456</p>
                        <p>+01545445456</p>
                        <p>+01545445456</p>
                        <p>+01545445456</p>
                        <p>+01545445456</p>
                    </div>
                </div>
        </div>
            
            
              <div className='basis-1/2 flex-grow'>
                <h5 className='text-xl mb-4' >About Us</h5>
                <ul className='flex flex-wrap pl-1 text-sm text-zinc-600'>
                    <li className='w-1/2 pb-2'>Emi</li>
                    <li className='w-1/2 pb-2'>Online Delivery</li>
                    <li className='w-1/2 pb-2'>Terms and Conditions</li>
                    <li className='w-1/2 pb-2'>Start Point Policy</li>
                    <li className='w-1/2 pb-2'>Contact Us</li>
                    <li className='w-1/2 pb-2'>Online Service Team</li>
                    <li className='w-1/2 pb-2'>Terms and Conditions</li>
                    <li className='w-1/2 pb-2'>Start Point Policy</li>
                    <li className='w-1/2 pb-2'>Contact Us</li>
                    <li className='w-1/2 pb-2'>Online Service Team</li>

                </ul>
            </div>
            <div className='basis-1/4'>
              
                    <h5 className='text-xl mb-4' >Stay Connected</h5>
                    <div className='text-sm pl-1 text-zinc-600'>
                        <h6 className='text-lg mb-1 text-white'>Random ltd</h6>
                        <p>Head Office: 43 Saudi Arab Palm Tree,Fatema Bukhari, Saudi 7233</p>
                    </div>
            
            </div>
        </div>
    </div>
  )
}

export default Footer