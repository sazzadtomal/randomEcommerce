import React from 'react'
import Modal from './Modal'
import { useDispatch,useSelector } from 'react-redux'
import { setCartVisible } from '../features/cartSlice'

const Cart = () => {
    const dispatch=useDispatch()

    const visible=useSelector(state=>state.cart.visible)


  return (
    <div className=''>
        <Modal visible={visible} close={()=>dispatch(setCartVisible())}/>
        <div className={`${!visible? "translate-x-full": ""} right-0 ease-in duration-200 h-full w-2/3 md:w-2/5 pt-6 pl-4  pr-6 lg:hidden block border bg-white fixed`}></div>

    </div>
    
  )
}

export default Cart