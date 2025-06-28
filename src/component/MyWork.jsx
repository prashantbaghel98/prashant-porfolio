import React from 'react'
import ArrowIcon from '../assets/arrow_icon.svg'
import theme_pattern from '../assets/theme_pattern.svg'
import work from '../assets/project_1.svg'
import Title from '../components-parts/Title'




const MyWork = () => {
    return (
        <section className='mywork' id='portfolio'>
            <Title title="My Latest Work" />
            <div className="mywork-section grid sm:grid-cols-3 gap-5  ">
                <div className='h-[350px] overflow-y-scroll rounded-2xl '>
                    <a href="https://foodie.worldtricks4u.com/" target="_blank" ><img src="./Foodies-website.png" alt="" className=' duration-300 border-2 border-[pink]' /></a>
                </div>

                <div className='h-[350px] overflow-y-scroll rounded-2xl '>
                    <a href="https://manojcv.worldtricks4u.com/" target="_blank" ><img src="./manojportfolio.png" alt="" className=' duration-300 border-2 border-[pink]' /></a>
                </div>

                <div className='h-[350px] overflow-y-scroll rounded-2xl '>
                    <a href="https://nexcent.worldtricks4u.com/" target="_blank" ><img src="./nexcent.png" alt="" className=' duration-300 border-2 border-[pink]' /></a>
                </div>

                <div className='h-[350px] overflow-y-scroll rounded-2xl '>
                    <a href="https://interiordesign.worldtricks4u.com/" target="_blank" ><img src="./reactinterior.png" alt="" className=' duration-300 border-2 border-[pink]' /></a>
                </div>

                <div className='h-[350px] overflow-y-scroll rounded-2xl '>
                    <a href="https://digitalagency.worldtricks4u.com/" target="_blank" ><img src="./digitalagency.png" alt="" className=' duration-300 border-2 border-[pink]' /></a>
                </div>

                <div className='h-[350px] overflow-y-scroll rounded-2xl '>
                    <a href="https://www.worldtricks4u.com/" target="_blank" ><img src="./worldtricks4u.png" alt="" className=' duration-300 border-2 border-[pink]' /></a>
                </div>

                <div className='h-[350px] overflow-y-scroll rounded-2xl '>
                    <a href="https://services.worldtricks4u.com/" target="_blank" ><img src="./eservice.png" alt="" className=' duration-300 border-2 border-[pink]' /></a>
                </div>

                <div className='h-[350px] overflow-y-scroll rounded-2xl '>
                    <a href="https://www.orenspace.com/" target="_blank" ><img src="./orenspace.png" alt="" className=' duration-300 border-2 border-[pink]' /></a>
                </div>

            </div>
            {/* <button className='flex items-center gap-3 mx-auto my-5 border-2 px-4 py-3 rounded-2xl'>Show More <img src={ArrowIcon} className='h-3' /></button> */}
        </section>
    )
}

export default MyWork