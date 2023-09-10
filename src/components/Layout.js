import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Home from './Home'
import Footer from "./Footer"


const Layout = () => {
  return (
     <section className='h-screen relative'>
       <Navbar/>
       <Main>
        <Home/>
       </Main>
       <Footer/>

      

     </section>
  )
}

export default Layout