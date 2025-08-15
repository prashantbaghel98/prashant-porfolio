import React from 'react'
import user from '../assets/user_icon.svg'

const Footer = () => {
    return (
        <section className="footer sm:mt-0 w-[100%]">
            {/* <div className="hidden one-section sm:flex justify-center gap-10">
                <div className="left sm:w-[50%]">
                    <p className=''>I am  fullstack developer from Ghaziabad, India with 1 year experience in multiple projects like Company Websites, Portfolio Website, Pizza Delivery Website.</p>
                </div>
                <div className="right sm:flex items-center gap-5 sm:w-[50%]">
                    <div className="my-5 sm:my-0 input flex justify-start gap-5 h-10 items-center rounded-2xl py-2 ps-5 bg-slate-900 border-2 ">
                        <img src={user} alt="" />
                        <input name='name' type="text" className=' outline-none rounded-2xl bg-slate-900' placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <button className='mx-[30%] sm:mx-0 hover:border-2 h-10 hover:border-white  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-3  rounded-2xl'>Subscribe Now</button>
                    </div>
                </div>
            </div> */}


            <hr className='my-5 ' />
            <footer className='sm:flex justify-between  text-[20px] pb-5'>
                <div className="left text-center mx-auto sm:text-left">&copy; Prashant Kumar. All Reserved Rights</div>
                {/* <div>
                    <ul className='hidden sm:flex text-center  gap-5 '>
                        <li>Terms Of Services</li>
                        <li>Privacy Policy</li>
                        <li>Connect With Me</li>
                    </ul>
                </div> */}
            </footer>
        </section>
    )
}

export default Footer
