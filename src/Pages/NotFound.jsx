import React from 'react';
import {useNavigate} from 'react-router-dom';

function NotFound() {

    const navigate = useNavigate();

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center bg-[#1A2238]'>
        <h1 className='text-9xl font-extrabold text-white'>
            404
        </h1>
        <div className='bg-black text-white px-2 text-sm rounded rotate-12 absolute'>
            page not found...
        </div>
        <button className='mt-5'
        onClick={()=>navigate(-1)}
        >
                <a className='relative inline-block font-md text-sm text-[#FF6A3D] group active:text-yellow-500 focus:outline-none focus:ring'>
                <span className='relative block px-8 py-3 bg-[#1A2238] border border-current'>
                    Go Back
                </span>
                </a>
        </button>
    </div>
  )
}

export default NotFound