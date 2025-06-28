import React from 'react'
import Title from '../components-parts/Title'
import CodSoft from '../assets/Certificate CodSoft.jpg'
import Ocanet from '../assets/Certificate Ocanet.jpg'
import Google_Unlocked from '../assets/Digital Marketing.jpg'
import SEO from '../assets/SEO.jpg' 
import Web_Development from '../assets/Web Development.jpg'
import Wordpress from '../assets/wordpress.jpg'

const Certification = () => {
  return (
    <section className='mywork' id='portfolio'>
    <Title title="Certifications" />
    <div className="mywork-section grid sm:grid-cols-3 gap-5 ">

    <img src={Wordpress} alt="" className='rounded-2xl sm:h-[300px] hover:scale-105 duration-300 border-2 border-[pink] ' />

        <img src={CodSoft} alt="" className='rounded-2xl sm:h-[300px] hover:scale-105 duration-300 border-2 border-[pink] ' />

        <img src={Ocanet} alt="" className='rounded-2xl sm:h-[300px] hover:scale-105 duration-300 border-2 border-[pink] ' />

        <img src={Google_Unlocked} alt="" className='rounded-2xl sm:h-[300px] hover:scale-105 duration-300 border-2 border-[pink] ' />

        <img src={SEO} alt="" className='rounded-2xl sm:h-[300px] hover:scale-105 duration-300 border-2 border-[pink] ' />

        <img src={Web_Development} alt="" className='rounded-2xl sm:h-[300px] hover:scale-105 duration-300 border-2 border-[pink] ' />

        
    </div>
    
</section>
  )
}

export default Certification
