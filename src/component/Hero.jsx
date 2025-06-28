import React from 'react'
import Profile from '../assets/Profile.png'

const Hero = () => {
    return (
        <section className="hero flexjustify-center gap-5 my-[5%] ">
            <div className="profile-section sm:text-center">
                <img src={Profile} alt="" className='h-[200px] mx-auto sm:mx-[40%] hover:scale-105 transition-transform duration-300' />
                <h1 className='leading-none text-[50px] sm:text-[70px] font-semibold'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>I'm Prashant Kumar,</span>website developer based in India</h1>
                <p className=' my-5'>I am an aspiring software engineer passionate about web development, digital marketing, and content creation. I have hands-on experience with the MERN stack and WordPress, and I’m always looking for ways to bring fresh, innovative solutions. Whether it’s building custom websites or creating engaging content, I’m committed to learning and evolving in the ever-changing world of technology.</p>
                <div className="profile-action flex gap-5 justify-center">
                    <button className='hover:border-2 hover:border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-3  rounded-2xl'><a href='#contact'>Contact With Me</a></button>
                    <button className='border-2 py-1 px-3 hover:border-purple-700 rounded-2xl'><a href="https://drive.google.com/file/d/1-K7icm99-Cl3nLKVBdDT2wz1JsE9UZRw/view?usp=sharing" target="_blank" >My Resume</a></button>
                </div>
            </div>
        </section>
    )
}

export default Hero
