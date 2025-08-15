import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Services from './component/Services'
import MyWork from './component/MyWork'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Education from './component/Education'
import Certification from './component/Certification'
import Experience from './component/Experience'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Experience/>
     <Education/>
     <Certification/>
     <Services/>
     <MyWork/>
     <Contact/>
     <Footer/>
    
    </>
  )
}

export default App
