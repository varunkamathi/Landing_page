import React from 'react'
import video from '../assets/video.png'
import avtar from '../assets/avtar.png'
import symbol from '../assets/symbol.png'
import left from '../assets/left.png'
import right from '../assets/right.png'

const Testmonial = () => {
  return (
    
    <div className='text-center items-center px-4 md:px-8 mb-20'>
      <h1 className='font-bold text-3xl md:text-4xl mb-5 text-gray-800'>
        What Our Pharma Partners Say
      </h1>
      <p className='text-lg text-gray-600 max-w-xl mx-auto mb-10'>
        Driving Transformations, One Brand at a Time
      </p>

      <div className='max-w-5xl mx-auto p-6 md:p-10 bg-slate-50 rounded-xl shadow-lg'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 '>
        
        <div>
          <img src={video} className='w-125 h-auto rounded-lg shadow-lg' alt='testimonial video' />
        </div>

        
        <div className='text-left max-w-md'>
          <div className='flex items-center gap-3 mb-2'>
            <img src={avtar} className='w-15 h-15 rounded-full' />
            <h1 className='text-xl font-bold text-gray-800'>Tabish Khan</h1>
            <img src={symbol} className='w-15 h-15' alt='symbol' />
          </div>
          <p className='text-gray-600 w-100 text-2xl' >
            Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us
            navigate complex regulations while driving remarkable growth.
          </p>
        </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-6 mt-6'>
        <a href='#' aria-label='Previous testimonial'>
          <img src={left} className='w-15 h-15 hover:scale-110 transition-transform duration-200' alt='left arrow' />
        </a>
        <a href='#' aria-label='Next testimonial'>
          <img src={right} className='w-15 h-15 hover:scale-110 transition-transform duration-200' alt='right arrow' />
        </a>
      </div>
    </div>
  )
}

export default Testmonial
