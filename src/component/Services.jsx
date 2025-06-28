import React from 'react'
import ServicesComponent from '../components-parts/Services'
import theme_pattern from '../assets/theme_pattern.svg'
import Title from '../components-parts/Title'


const Services = () => {
  return (
   <>
    <section className="services" id='services'>
      <Title title="My Services"/>

<div className="service-section p-5 sm:p-0 grid sm:grid-cols-3 gap-10">

    <ServicesComponent number="01" title="Custom Web Development" des="Build custom websites that perfectly match your business goals."/>
    <ServicesComponent number="02" title="E-Commerce Development" des="Develop secure, scalable online stores for enhanced user experience."/>
    <ServicesComponent number="03" title="Front-End Development" des="Craft dynamic, interactive interfaces using modern frameworks and technologies."/>
    <ServicesComponent number="04" title="Back-End Development" des="Build reliable server-side solutions for smooth website functionality."/>
    <ServicesComponent number="05" title="API Integration & Development" des="Integrate third-party APIs for added functionality and smooth interaction."/>
    <ServicesComponent number="06" title="Web Performance Optimization" des="Optimize website speed for faster load times and better user experience."/>
    <ServicesComponent number="07" title="Content Management Systems (CMS)" des="Build and customize CMS platforms for easy content management."/>
    <ServicesComponent number="08" title="SEO Optimization" des="Optimize your website for search engines to increase visibility."/>
    <ServicesComponent number="09" title="UI/UX Design" des="Design intuitive, user-friendly interfaces that enhance user interaction."/>


</div>
              
  
          </section>
   </>
  )
}

export default Services
