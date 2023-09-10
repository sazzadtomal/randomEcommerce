import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
const Search = () => {
  return (
    <div className='flex px-2 items-center justify-between w-2/5 gap-4 bg-white rounded-sm m-4'>
          <input type='text' className='flex-grow p-2 outline-0'/>
          <AiOutlineSearch/>
        </div>
  )
}

export default Search