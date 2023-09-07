import React from 'react'
import {BsInstagram,BsLinkedin,BsTwitter,BsFacebook} from 'react-icons/bs';

function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <footer className='relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row justify-around items-center text-white bg-slate-500 py-5'>
        <section className='text-lg '>
            Copyright{currentYear}| All Rights are reserved
        </section>
        <section className='flex items-center justify-center  gap-5 text-white text-xl'>
            <a href="#" className='hover:text-yellow-500 ease-in-out duration-300'>
                <BsFacebook/>                
            </a>
            <a href="#" className='hover:text-yellow-500 ease-in-out duration-300'>
                <BsInstagram/>                
            </a>
            <a href="#" className='hover:text-yellow-500 ease-in-out duration-300'>
                <BsLinkedin/>                
            </a>
            <a href="#" className='hover:text-yellow-500 ease-in-out duration-300'>
                <BsTwitter/>                
            </a>
        </section>
    </footer>
    
  )
}

export default Footer;