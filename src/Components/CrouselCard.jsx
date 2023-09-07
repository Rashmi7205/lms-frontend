import React from 'react'

function CrouselCard({image,title,description,slideNumber,totalSlides}) {
  return (
    <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
    <div className='w-3/5 flex flex-col items-center justify-between mx-auto h-[450px] bg-white my-10 text-black p-5 rounded-lg  shadow-2xl border-8 border-purple-600'>
            <img src={image} className="w-[150px] h-[150px] rounded-full border-2 border-purple-500 p-3" />
            <p className='text-center text-md font-semibold text-slate-500'>"{description}"</p>
            <h1 className='text-right text-lg font-bold w-full'>-{title}</h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${slideNumber===1?totalSlides:(slideNumber-1)}`} className="btn btn-circle">❮</a> 
        <a href={`#slide${(slideNumber)%totalSlides+1}`} className="btn btn-circle">❯</a>
        </div>
    </div>
  );
}

export default CrouselCard