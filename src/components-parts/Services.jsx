import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import ArrowIcon from '../assets/arrow_icon.svg'

const ServicesComponent = (props) => {
    return (

            <div className="service-card border-2 rounded-2xl px-10 py-16 flex flex-col gap-5 p-2 hover:scale-105 hover:border-pink-800 hover:bg-[#0f0808] duration-300">
                <h1 className='text-[20px]'>{props.number}</h1>
                <h2 className='text-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>{props.title}</h2>
                <p>{props.des}</p>
                {/* <button className='flex items-center gap-3'>Read More <img src={ArrowIcon} className='h-3' /></button> */}
            </div>


       

    )
}

export default ServicesComponent
