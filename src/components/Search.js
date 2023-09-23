import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
const Search = () => {
  return (
    <div className='flex px-2 items-center justify-between shadow-md m-auto w-full lg:w-2/5 gap-4 bg-white rounded-sm'>
          <input type='text' className='flex-grow p-2 outline-0'/>
          <AiOutlineSearch/>
        </div>
  )
}

export default Search