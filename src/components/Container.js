import React from 'react'
import CatCard from "./Catagory/CatCard"
import {BsPhone,BsHeadphones,BsSpeaker,BsSmartwatch,BsFillMouseFill,BsKeyboardFill,BsEarbuds} from "react-icons/bs"
import {IoIosLaptop} from "react-icons/io"
import {AiFillCar} from "react-icons/ai"
import {PiTelevisionSimple} from "react-icons/pi"
import {BiPrinter} from "react-icons/bi"
import {GiCctvCamera} from "react-icons/gi"
import {FiBatteryCharging} from "react-icons/fi"


const Container = () => {

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



  return (
      <div className='flex p-4 flex-wrap  content-center '>
        {categories.map(cat=>(<CatCard title={cat.name} logo={cat.logo}/>))}
      </div>
  
  )
}

export default Container