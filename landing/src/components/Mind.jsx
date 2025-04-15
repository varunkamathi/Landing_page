import React from 'react';

const Mind = () => {
  return (
    <div className='flex flex-col items-center text-center px-4 mb-20 py-16 bg-gradient-to-r from-blue-100 via-white to-pink-100'>
      <h1 className='font-bold text-3xl md:text-4xl mb-5 text-gray-800'>
        Your Peace of Mind
      </h1>
      <p className='text-lg text-gray-600 max-w-xl'>
        Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market.
      </p>
      <button className='bg-blue-500 w-60 rounded-full text-xl h-12 text-white mt-5'>
        Get started
      </button>
    </div>
  );
};

export default Mind;
