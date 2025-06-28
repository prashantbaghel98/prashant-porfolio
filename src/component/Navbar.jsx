import React from 'react'
import { Link } from 'react-scroll'
Link

const Navbar = () => {
  return (
  <section className="hidden sm:flex justify-between items-center py-2">
    <div className="nav-logo">
        <h1 className='text-[tomato] text-[20px] font-semibold'>PRASHANT PORTFOLIO</h1>
    </div>

    <div className="nav-menu">
        <ul className='flex gap-5 text-[20px]'>
            <li ><a href='#home' className='scroll-smooth'></a>Home</li>
            <li ><a href='#about' className='scroll-smooth'>About Us</a></li>
            <li ><a href='#services' className='scroll-smooth'>Services</a></li>
            <li ><a href='#portfolio' className='scroll-smooth'>Portfolio</a></li>
            <li ><a href='#contact' className='scroll-smooth'>Contact</a></li>
        </ul>
    </div>


        <div className="nav-contact-btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-3 hover:scale-105 duration-500 rounded-2xl ">
            <button><a href='#contact'>Connect With Me</a></button>
        </div>
  </section>
  )
}

export default Navbar
