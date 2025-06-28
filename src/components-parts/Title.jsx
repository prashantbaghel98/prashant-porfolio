import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'

const Title = (props) => {
    return (
        <div className="flex-col sm:flex-row flex sm:mb-5 justify-center  py-5">
            
            <h1 className='relative text-[50px] mx-auto sm:text-[60px] font-semibold z-10'>{props.title}
            <img src={theme_pattern} alt="" className='h-5 sm:h-10 absolute top-12 sm:top-10 -right-10 sm:-right-20' />
            </h1>
            
        </div>
    )
}

export default Title
