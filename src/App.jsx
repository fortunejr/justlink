import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import Homepage from './Pages/Homepage/Homepage'
import Nav from './Components/Nav/Nav'
import ScrollToTop from './Components/ScrollToTop'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import WhyChooseUs from './Pages/WhyChooseUs/WhyChooseUs'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ComingSoon from './Pages/ComingSoon'

function App() {

  return (
    <>
    <ScrollToTop/>
      <Nav />
      <Routes>
        <Route path = "/"  element = {<Homepage />}/>
        <Route path = "/about"  element = {<About />}/>
        <Route path = "/services"  element = {<Services />}/>
        <Route path = "/why-choose-us"  element = {<WhyChooseUs />}/>
        <Route path = "/contact"  element = {<Contact />}/>
        <Route path = "/coming-soon"  element = {<ComingSoon />}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App
