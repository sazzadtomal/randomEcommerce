import React from 'react'
import { useState,useRef } from 'react'
import { Link } from 'react-router-dom'

import useInput from "../hooks/useInput"


const Login = () => {
   

   const [userInput,userReset,userAttributeObj]=useInput("") 
   const [passInput,passReset,passAttributeObj]=useInput("") 
   const [errMsg, setErrMsg] = useState('');
   const userRef = useRef();
   const errRef = useRef();


   const handleSubmit=(e)=>{
    e.preventDefault();
   }
   

  return (
    
        <section className='w-full md:w-3/4 xl:w-1/2 m-auto my-16 md:my-8'> 
            <div className='border border-slate-400 shadow-lg p-8 pb-16'>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 className='text-3xl font-bold mb-8'>Sign In</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label className='mb-1' htmlFor="username">Username:</label>
                    <input 
                        className='border h-8 pl-2'
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        // onChange={(e) => setUser(e.target.value)}
                        // value={user}
                        {...userAttributeObj}
                        required
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-1' htmlFor="password">Password:</label>
                    <input
                        className='border h-8 pl-2'
                        type="password"
                        id="password"
                        {...passAttributeObj}
                        required
                    />
                </div>
                <button className='border w-1/2 p-1 rounded-lg mt-4 hover:bg-orange-300 disabled:bg-gray-500'>Sign In</button>
            
            </form>
            <p className='mt-8'>
                Need an Account?<br />
                <span className="underline underline-offset-2 hover:text-orange-500">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
            </div>
        </section>
  )
}

export default Login