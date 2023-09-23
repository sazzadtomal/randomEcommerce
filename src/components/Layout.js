import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Home from './Home'
import Footer from "./Footer"
import Sidebar from './Sidebar'
import {Route,Routes} from "react-router-dom";
import Phones from "../Pages/Phones"


const Layout = () => {
  return (
     <section className='min-h-screen relative'>
       <Navbar/>
       <Sidebar/>
       <Main>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/phone' element={<Phones/>}/>
          <Route path='/laptop' element={<Home/>}/>
          </Routes>
       </Main>
       <Footer/>

      

     </section>
  )
}

export default Layout