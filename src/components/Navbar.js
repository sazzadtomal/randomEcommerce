import React from 'react'
import Logo from "../assets/random.svg"
import Search from "./Search"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiSolidOffer} from "react-icons/bi"


const Navbar = () => {
  return (
    <div className= 'sticky top-0 w-full bg-slate-900'>
      <div className='xl:hidden items-center justify-between flex m-auto  px-4'>
        <div className='w-[calc(50%-32px)]'>
          <GiHamburgerMenu className='text-2xl text-white'/>
        </div>
        <div><img src={Logo} className='h-16 p-2' /></div>
        <div className='flex w-[calc(50%-32px)] gap-3 justify-end'>
           <AiOutlineSearch className='text-2xl text-white'/>
           <AiOutlineShoppingCart className='text-2xl text-white'/>
        </div>
      </div>
      
      <div className='h-20 hidden xl:flex justify-between items-center xl:w-4/6 gap-4  m-auto'>
        <img src={Logo} className='h-16 p-2' />
        <Search/>
        <div className='flex gap-16'>
          <div className=' flex items-center gap-2 text-white'>
            <AiOutlineUser className='text-2xl'/>
            <div>
              <p className='text-sm'>User</p>
              <span className= 'text-xs'>Register ot login</span>
            </div>
          </div>
          <div className=' flex items-center gap-2 text-white'>
            <BiSolidOffer className='text-2xl'/>
            <div>
              <p className='text-sm'>Offers</p>
              <span className= 'text-xs'>Discounts and Deals</span>
            </div>
          </div>
        </div>


        

      </div>
    </div>
  )
}

export default Navbar