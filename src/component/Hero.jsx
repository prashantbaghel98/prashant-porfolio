import React from 'react'
import Profile from '../assets/Hero-profile.jpg'

const Hero = () => {
    return (
        <section className="hero flexjustify-center gap-5 my-[5%] ">
            <div className="profile-section sm:text-center">
                <img src={Profile} alt="" className='h-[200px] mx-auto sm:mx-[40%] hover:scale-105 transition-transform duration-300' />    
                <h1 className='leading-none text-[35px] sm:text-[70px] font-semibold'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-[40px] sm:text-[70px]'>I'm Prashant Kumar,</span> <br></br>Web Developer</h1>
                <p className=' my-5'>I am an aspiring software engineer passionate about web development, digital marketing, and content creation. I have hands-on experience with the MERN stack and WordPress, and I’m always looking for ways to bring fresh, innovative solutions. Whether it’s building custom websites or creating engaging content, I’m committed to learning and evolving in the ever-changing world of technology.</p>
                <div className="profile-action flex gap-5 justify-center">
                    <button className='hover:border-2 hover:border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-3  rounded-2xl'><a href='#contact'>Contact With Me</a></button>
                    <button className='border-2 py-1 px-3 hover:border-purple-700 rounded-2xl'><a href="https://drive.google.com/file/d/1TFP0701bck6dpSku5VKkOl8HrMBAGYw4/view?usp=sharing" target="_blank" >My Resume</a></button>
                </div>
            </div>
        </section>
    )
}

export default Hero
