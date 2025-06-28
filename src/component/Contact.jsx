import { React, useState } from 'react';
import Title from '../components-parts/Title';
import Mail from '../assets/mail_icon.svg';
import Location from '../assets/location_icon.svg';
import Call from '../assets/call_icon.svg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    const serviceId = 'service_ff8aheb';
    const templateId = 'template_xzrpcth';
    const publicKey = '86YCXRrpeKy1hPkrO';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Prashant Portfolio',
      message: msg,
    };

    if(name==="" || email === "" || msg ==""){
        setError("Enter all Entries")
      
    }
    else{
      emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setName('');
        setEmail('');
        setMsg('');
        setError("")
      })
      .catch((error) => {
        console.log('Error sending email', error);
      });
    }
  
      
    

  };

  return (
    <section className="contact " id='contact'>
      <Title title="Get In Touch" />
      <div className="sm:flex justify-center -mt-16 sm:mt-0">
        <div className="contact-left flex flex-col gap-5 sm:w-[50%]">
          <h1 className="text-[60px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Let's Talk
          </h1>
          <p className="sm:w-[80%]">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="email flex gap-5 items-center">
            <img src={Mail} alt="" />
            <p>prashantbaghel98@gmail.com</p>
          </div>
          <div className="number flex gap-5 items-center">
            <img src={Call} alt="" />
            <p>+91 8851615793</p>
          </div>
          <div className="location flex gap-5 items-center">
            <img src={Location} alt="" />
            <p>Nilaya Greens, Ghaziabad</p>
          </div>
        </div>

        <div className="contact-right sm:w-[40%]">
          <form onSubmit={submitHandler} action="">
            <input
              name="name"
              type="text"
              className="rounded-2xl py-3 px-5 w-full sm:w-11/12 my-5 bg-slate-900"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              name="email"
              type="text"
              className="rounded-2xl py-3 px-5 w-full sm:w-11/12 my-5 bg-slate-900"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              name="message"
              className="rounded-2xl py-3 h-[150px] px-5 w-full sm:w-11/12 my-5 resize-none bg-slate-900"
              placeholder="Enter Message"
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            />
            <p className='text-[red] mb-2'>{error}</p>
            <button
              type="submit"
              className="mx-[30%] sm:mx-0 hover:border-2 h-10 hover:border-white  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-3  rounded-2xl"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;