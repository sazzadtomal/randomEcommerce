import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Home from './Home'
import Footer from "./Footer"
import Sidebar from './Sidebar'
import {Route,Routes} from "react-router-dom";
import Phones from "../Pages/Phones"
import Login from '../Pages/Login'

const Layout = () => {
  return (
     <section className='min-h-screen relative flex flex-col'>
       <Navbar/>
       <Sidebar/>
       <Main className="flex-grow">
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/phone' element={<Phones/>}/>
          <Route path='/login' element={<Login/>}/>
          
          </Routes>
       </Main>
       <Footer/>

      

     </section>
  )
}

export default Layout