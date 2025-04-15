import React from 'react'
import converstion from '../assets/converstion.png'

const Converstion = () => {
  return (
  <div className="text-center mt-20 mb-20 px-4 md:px-12 lg:px-24">
      <h1 className="font-bold text-3xl md:text-4xl mb-8 text-gray-800">
      Driving Property Inquiries to Conversions      </h1>
      <p className='text-lg text-gray-600'>Streamlined Strategies for Real Estate Success </p>

      <div className="flex flex-col lg:flex-row items-center gap-10 mb-5">
        <div className="flex-shrink-0">
          <img
            className="w-full max-w-md "
            src={converstion}
            alt="Real Estate Mastery"
          />
        </div>

        <div className="text-left max-w-fit">
          <h2 className="text-2xl font-semibold mb-4">
          Optimized Path to Property Purchase
          </h2>
          <p className="text-gray-600 leading-relaxed">
          In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.
          </p>
          <button className='bg-blue-500 w-60 rounded-4xl text-xl h-15 text-white mt-5 '>Get started</button>

        </div>
      </div>
    </div>
)
}

export default Converstion;