import React from 'react'
import {BsPhone,BsHeadphones,BsSpeaker,BsSmartwatch,BsFillMouseFill,BsKeyboardFill,BsEarbuds} from "react-icons/bs"
import {IoIosLaptop} from "react-icons/io"
import {AiFillCar,AiOutlineClose} from "react-icons/ai"
import {PiTelevisionSimple} from "react-icons/pi"
import {BiPrinter} from "react-icons/bi"
import {GiCctvCamera} from "react-icons/gi"
import {FiBatteryCharging} from "react-icons/fi"
import Modal from './Modal'

import { useDispatch,useSelector } from 'react-redux'
import { setVisible } from '../features/sidebarSlice'


const categories=[
    {name:"Phone",logo:BsPhone},
    {name:"Laptop",logo:IoIosLaptop},
    {name:"Televison",logo:PiTelevisionSimple},
    {name:"HeadPhone",logo:BsHeadphones},
    {name:"Printer",logo:BiPrinter},
    {name:"Speaker",logo:BsSpeaker},
    {name:"Smartwatch",logo:BsSmartwatch},
    {name:"CC Camera",logo:GiCctvCamera},
    {name:"Car",logo:AiFillCar},
    {name:"Mouse",logo:BsFillMouseFill},
    {name:"Keyboard",logo:BsKeyboardFill},
    {name:"PowerBank",logo:FiBatteryCharging},
    {name:"Earbuds",logo:BsEarbuds},
]


const Sidebar = () => {

    const visible=useSelector(state=>state.sidebar.visible)
    const dispatch=useDispatch()



  return (



      <div>
          <Modal visible={visible} close={()=>dispatch(setVisible())}/>
          <div className={`${!visible? "-translate-x-full": ""} ease-in duration-200 h-full w-1/4 pt-6 pl-4  pr-6 lg:hidden block border bg-white fixed`}>
            <h3 className='font-bold mb-16 flex justify-between items-center'>
                Catagories
                </h3>
            <ul>
                {categories.map(cat=>(<li className='hover:text-orange-400 p-2  mb-1 list-none flex border-b-2 items-center justify-between'>
                    <span>{cat.name}</span>
                    <span>{cat.logo()}</span> </li>))}
            </ul>
           </div>
      </div>
  )
}

export default Sidebar