import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Hero/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Works from './Components/Works/Works'
import Teams from './Components/Teams/Teams'
import Testimonials from './Components/Testimonials/Testimonials'
import Prices from './Components/Prices/Prices'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Works/>
     <Teams/>
     <Testimonials/>
     <Prices/>
     <Blog/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
