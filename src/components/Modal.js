import React from 'react'

const Modal = ({visible,close}) => {
  return (
    <div onClick={close} className={` fixed ${visible? "opacity-70": "hidden"} lg:hidden  ease-in duration-200  bg-slate-900 h-screen w-screen`}></div>
  )
}

export default Modal