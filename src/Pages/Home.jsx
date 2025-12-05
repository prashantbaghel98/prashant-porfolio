import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About'
import Experience from '../component/Experience'
import Education from '../component/Education'
import Certification from '../component/Certification'
import Services from '../component/Services'
import MyWork from '../component/MyWork'
import Contact from '../component/Contact'

const Home = () => {
  return (
    <div>
   <Hero/>
     <About/>
     <Experience/>
     <Education/>
     <Certification/>
     <Services/>
     <MyWork/>
     <Contact/>
    </div>
  )
}

export default Home