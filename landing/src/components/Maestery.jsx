import React from 'react';
import mestry from '../assets/mestry1.png';

const Maestery = () => {
  return (
    <div className="text-center mt-20 mb-20 px-4 md:px-12 lg:px-24">
      <h1 className="font-bold text-3xl md:text-4xl mb-12 text-gray-800">
        Real Estate-Focused Digital Mastery
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img
            className="w-full max-w-md rounded-xl shadow-lg"
            src={mestry}
            alt="Real Estate Mastery"
          />
        </div>

        <div className="text-left max-w-fit">
          <h2 className="text-2xl font-semibold mb-4">
            Unlock the Potential of Digital Real Estate Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing.
            Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.
          </p>
          <button className='bg-blue-500 w-60 rounded-4xl text-xl h-15 text-white mt-5 '>Get started</button>

        </div>
      </div>
    </div>
  );
};

export default Maestery;
