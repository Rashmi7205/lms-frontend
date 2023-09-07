import React from 'react'
import Homelayout from '../Layouts/Homelayout';
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import image1  from '../assets/images/image1.png';

function HomePage() {
  return (
    <Homelayout>
        <div className='pt-10 flex flex-col  md:flex-row items-center justify-center gap-10 mx-16 h-[90vh]  '>
        <div className='w-1/2 space-y-6'>
            <h1 className='font-semibold text-5xl'>
                Find Out best <span className='text-yellow-500 font-bold'>online course </span>
            </h1>
            <p className='text-grey-200 text-xl'>
                We have a large library of courses taught by highly skilled and qualified faculties  at coursify.
            </p>
            <div className='space-x-6'>
                <Link to='/courses'>
                    <button className='bg-yellow-500 px-5 py-3 rounded-md text-lg font-semibold text-white cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300'>
                        Explore Courses
                    </button>
                </Link>
                <Link to='/contact'>
                    <button className=' px-5 py-3 rounded-md text-lg  border-2 border-yellow-500 font-semibold text-white cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300'>
                       Contact Us
                    </button>
                </Link>
            </div>
        </div>
        <img src={image1} alt="image" />
        </div>
        
    </Homelayout>
  )
}

export default HomePage