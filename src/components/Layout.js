import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Home from './Home'
import Footer from "./Footer"
import Sidebar from './Sidebar'


const Layout = () => {
  return (
     <section className='h-screen relative'>
       <Navbar/>
       <Sidebar/>
       <Main>
        <Home/>
       </Main>
       <Footer/>

      

     </section>
  )
}

export default Layout