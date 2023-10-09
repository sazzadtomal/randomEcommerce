import React from 'react'
import Logo from "../assets/random.svg"
import Search from "./Search"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiSolidOffer} from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import { setDropSearch,getDropSearch } from '../features/navbarSilce'
import { useDispatch,useSelector } from 'react-redux'
import { setVisible } from '../features/sidebarSlice'
import { NavLink } from 'react-router-dom'
import { categories } from '../Data/data'
import {setCartVisible} from "../features/cartSlice"



const Navbar = () => {
  const dropSearch=useSelector(getDropSearch)
  const dispatch=useDispatch()
  const navigate=useNavigate()



  return (

    //mobile navbar
    
      <div className= 'sticky top-0 w-full bg-slate-900'>
        <div className='xl:hidden items-center justify-between flex m-auto  px-4'>
          <div onClick={()=>dispatch(setVisible())} className='w-[calc(50%-32px)]'>
            <GiHamburgerMenu  className='text-2xl text-white hover:text-orange-400 cursor-pointer'/>
          </div>
          <div onClick={()=>navigate("/")}><img src={Logo} className='h-16 p-2 cursor-pointer'/></div>
          <div className='flex w-[calc(50%-32px)] gap-3 justify-end'>
             <AiOutlineSearch onClick={()=>dispatch(setDropSearch())} className='text-2xl text-white hover:text-orange-400 cursor-pointer'/>
             <AiOutlineShoppingCart onClick={()=>dispatch(setCartVisible())} className='text-2xl text-white hover:text-orange-400 cursor-pointer'/>
             <AiOutlineUser  className='hover:text-orange-400 cursor-pointer text-2xl text-white' onClick={()=>navigate("/login")}/>
          </div>
        </div>
         <div className={ `fixed mt-2 w-full block ${dropSearch?"block":"hidden "} lg:hidden`}>
            <div className=' w-[95%] m-auto border-2'><Search/></div>
          </div>
      
        {/*desktop navbar*/}
        <div>
          <div className='h-20 hidden xl:flex justify-between items-center xl:w-4/6 gap-4  m-auto'>
            <img onClick={()=>navigate("/")} src={Logo} className='h-16 p-2 cursor-pointer' />
            <Search/>
            <div className='flex gap-16'>
              <div className=' flex items-center gap-2 text-white hover:text-orange-400 cursor-pointer' onClick={()=>navigate("/login")} >
                <AiOutlineUser className='text-2xl' />
                <div>
                  <p className='text-sm'>User</p>
                  <span className= 'text-xs'>Register ot login</span>
                </div>
              </div>
              <div className=' flex items-center gap-2 text-white hover:text-orange-400 cursor-pointer'>
                <BiSolidOffer className='text-2xl'/>
                <div>
                  <p className='text-sm'>Offers</p>
                  <span className= 'text-xs'>Discounts and Deals</span>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='w-full border-b-2 bg-white hidden lg:block py-2'>
          <div className='w-4/6 m-auto flex flex-wrap gap-8'>
         {categories.map(cat=>(<NavLink onClick={()=>dispatch(setVisible())} to={"/"+cat.name.toLowerCase()} className='hover:text-orange-400 '>
                 <span className='font-bold'>{cat.name}</span>
                         </NavLink>))}
          </div>
          </div>
     </div>
       
    
  )
}

export default Navbar