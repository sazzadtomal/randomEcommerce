
import Modal from './Modal'
import { NavLink } from 'react-router-dom'

import {categories} from "../Data/data"

import { useDispatch,useSelector } from 'react-redux'
import { setVisible } from '../features/sidebarSlice'


const Sidebar = () => {

    const visible=useSelector(state=>state.sidebar.visible)
    const dispatch=useDispatch()



  return (



      <div className=''>
          <Modal visible={visible} close={()=>dispatch(setVisible())}/>
          <div className={`${!visible? "-translate-x-full": ""} ease-in duration-200 h-full w-2/3 md:w-1/4 pt-6 pl-4  pr-6 lg:hidden block border bg-white fixed`}>
            <h3 className='font-bold mb-16 flex justify-between items-center'>
                Catagories
                </h3>
            <ul>
                {categories.map(cat=>(<NavLink onClick={()=>dispatch(setVisible())} to={"/"+cat.name.toLowerCase()} className='hover:text-orange-400 p-2  mb-1 list-none flex border-b-2 items-center justify-between'>
                    <span>{cat.name}</span>
                    <span>{cat.logo()}</span> </NavLink>))}
            </ul>
           </div>
      </div>
  )
}

export default Sidebar