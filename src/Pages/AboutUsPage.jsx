import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import CrouselCard from '../Components/CrouselCard';

import aboutImage from '../assets/images/image2.png';
import celebrities from '../Constants/celebrityData';

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
                    {
                        celebrities?.map((celebrity,ind)=><CrouselCard image={celebrity.image} title={celebrity.title} description={ celebrity.description} slideNumber={ind+1} totalSlides={celebrities.length} />)
                    }
                </div>
            </div>
        </div>
    </HomeLayout>
    );
}

export default AboutUsPage