import React from 'react';
import hero1 from '../assets/hero1.png';

const HeroSection = () => {
  return (
    <div
   
      className='flex flex-col justify-center items-center'
    >
      <div className='text-center'>
        <h1 className='text-5xl w-175 py-2 px-1'>
          Elevate <span className='text-blue-500 font-bold'>Real Estate Success</span> with Osumare's Digital Expertise
        </h1>
        <p className='py-5'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
        <button className='bg-blue-500 w-70 rounded-4xl text-2xl h-10 text-white font-bold'>Get started</button>
      </div>
      <div className='py-10'>
        <img className='w-150' src={hero1} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
