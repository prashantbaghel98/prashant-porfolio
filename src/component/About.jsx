import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import Profile from '../assets/Profile Photo.jpg'
import Title from '../components-parts/Title'

const About = () => {
    return (
        <section className="about bg-black rounded-lg shadow-lg flex flex-col mx-a" id='about '>
            <Title title="About Me"  />
            <div className=" about-section sm:flex justify-center gap-10">
                <div className=" flex pt-5 items-center about-section-left sm:w-[40%] hover:scale-105 transition-transform duration-300">
                    <img src={Profile} alt="profile-image" className="object-cover  rounded-2xl w-full h-full mb-5 sm:mb- shadow-md bg-white" />
                </div>

                <div className="about-section-right flex flex-col sm:w-[60%]">
                    <p className='mb-5 '>I’m currently pursuing my Bachelor of Technology in Computer Science from R.D. Engineering College, Duhai (2019–2025). I’ve developed a strong foundation in web development and digital marketing, particularly with the MERN stack (MongoDB, Express.js, React.js, Node.js) and WordPress. My goal is to contribute to dynamic projects where I can leverage my technical expertise to solve real-world problems. <br /> <br />
                        I am deeply passionate about web development, SEO, and content creation, which led me to start a YouTube channel where I share educational content on technology and digital marketing. In my free time, I enjoy staying fit, exploring new technologies, and traveling.</p>

                    <div className="about-skills">

                        <div className="about-skill sm:flex items-center gap-5 p-2 rounded-lg transition-colors duration-300"><p className="min-w-[20%]">HTML&CSS</p><hr className='border-none w-[80%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-2xl'></hr></div>
                        <div className="about-skill sm:flex items-center gap-5 p-2 rounded-lg transition-colors duration-300"><p className="min-w-[20%]">React JS</p><hr className='border-none w-[70%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-2xl'></hr></div>
                        <div className="about-skill sm:flex items-center gap-5 p-2 rounded-lg transition-colors duration-300"><p className="min-w-[20%]">Node JS</p><hr className='border-none w-[75%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-2xl'></hr></div>
                        <div className="about-skill sm:flex items-center gap-5 p-2 rounded-lg transition-colors duration-300"><p className="min-w-[20%]">JavaScript</p><hr className='border-none w-[65%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-2xl'></hr></div>
                        <div className="about-skill sm:flex items-center gap-5 p-2 rounded-lg transition-colors duration-300"><p className="min-w-[20%]">Tailwind CSS</p><hr className='border-none w-[90%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-2xl'></hr></div>
                        <div className="about-skill sm:flex items-center gap-5 p-2 rounded-lg transition-colors duration-300"><p className="min-w-[20%]">WordPress</p><hr className='border-none w-[100%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-2xl'></hr></div>
                        <div className="about-skill sm:flex items-center gap-5 p-2 rounded-lg transition-colors duration-300"><p className="min-w-[20%]">SEO</p><hr className='border-none w-[100%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-2xl'></hr></div>
                        <div className="about-skill sm:flex items-center gap-5 p-2 rounded-lg transition-colors duration-300"><p className="min-w-[20%]">UI & UX</p><hr className='border-none w-[100%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-2xl'></hr></div>
                    </div>
                </div>
            </div>

            <div className=" about-achievements flex items-center justify-between my-10">
                <div className="about-achievement text-center hover:scale-105 transition-transform duration-300">
                    <h1 className='text-[40px] sm:text-[50px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>1+</h1>
                    <p className='text-[18px]'>YEAR OF EXPERIENCE</p>
                </div>
                <hr className=' border-none bg-white h-28 w-[.5px]' />

                <div className="about-achievement text-center hover:scale-105 transition-transform duration-300">
                    <h1 className='text-[40px] sm:text-[50px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>5+</h1>
                    <p className='text-[18px]'>PROJECTS COMPLETED</p>
                </div>
                <hr className=' border-none bg-white h-28 w-[.5px]' />

                <div className="about-achievement text-center hover:scale-105 transition-transform duration-300">
                    <h1 className='text-[40px] sm:text-[50px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>5+</h1>
                    <p className='text-[18px]'>HAPPY CLIENT </p>
                </div>
                <hr />
            </div>
        </section>
    )
}

export default About