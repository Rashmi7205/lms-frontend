import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';

import aboutImage from '../assets/images/image2.png';
import mahatma from '../assets/images/mahatma.png';
import jfk from '../assets/images/jfk.png';
import nelson from '../assets/images/nelson.png';
import einstein from '../assets/images/einstein.png';



function AboutUsPage() {
  return (
    <HomeLayout>
        <div className='pl-20 pt-20 flex flex-col items-center text-white w-full gap-10'>
            <div className='flex items-center gap-5  mx-10 h-[90vh]'>
                <section className='w-1/2 space-y-10'>
                    <h1 className='text-5xl text-yellow-500 font-semibold'>
                    Affordable and Quality Education
                    </h1>
                    <p className='text-xl text-grey-200'>
                        Our goal is to provide the afordable and quality education to the world . We are providing the platform for the aspiring teachers and students to share their skills ,creativity and knowledge to each other to empower and contribute in the growth and wellness.  
                    </p>
                </section>
                <div className='w-1/2'>
                    <img src={aboutImage} alt="#"
                        id="test1"
                        style={{
                            filter:'drop-shadow(0px 0px 10px  #0a0)'
                        }}
                        className='drop-shadow-sm'
                    />
                </div>
            </div>
            <div className='w-2/5 '>
                <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <div className='w-3/5 flex flex-col items-center justify-between mx-auto h-[450px] bg-white my-10 text-black p-5 rounded-lg  shadow-2xl border-8 border-purple-600'>
                        <img src={nelson} className="w-[150px] h-[150px] rounded-full border-2 border-purple-500 p-2" />
                        <p className='text-center text-md font-semibold text-slate-500'>"Education is the most powerful weapon which you can use to change the world."</p>
                        <h1 className='text-right text-lg font-bold w-full'>-Nelson Mandela</h1>
                    </div>
                   
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                <div className='w-3/5 flex flex-col items-center justify-between mx-auto h-[450px] bg-white my-10 text-black p-5 rounded-lg  shadow-2xl border-8 border-purple-600'>
                        <img src={einstein} className="w-[150px] h-[150px] rounded-full border-2 border-purple-500 p-3" />
                        <p className='text-center text-md font-semibold text-slate-500'>"Education is not the learning of facts, but the training of the mind to think."</p>
                        <h1 className='text-right text-lg font-bold w-full'>-Albert Einstein</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                <div className='w-3/5 flex flex-col items-center justify-between mx-auto h-[450px] bg-white my-10 text-black p-5 rounded-lg  shadow-2xl border-8 border-purple-600'>
                        <img src={mahatma} className="w-[150px] h-[150px] rounded-full border-2 border-purple-500 p-3" />
                        <p className='text-center text-md font-semibold text-slate-500'>"Live as if you were to die tomorrow. Learn as if you were to live forever."</p>
                        <h1 className='text-right text-lg font-bold w-full'>-Mahatma Gandhi</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                <div className='w-3/5 flex flex-col items-center justify-between mx-auto h-[450px] bg-white my-10 text-black p-5 rounded-lg  shadow-2xl border-8 border-purple-600'>
                        <img src={jfk} className="w-[150px] h-[150px] rounded-full border-2 border-purple-500 p-3" />
                        <p className='text-center text-md font-semibold text-slate-500'>"Let us think of education as the means of developing our greatest abilities, because in each of us there is a private hope and dream which, fulfilled, can be translated into benefit for everyone and greater strength for our nation."</p>
                        <h1 className='text-right text-lg font-bold w-full'>-John F. Kennedy</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </HomeLayout>
    );
}

export default AboutUsPage