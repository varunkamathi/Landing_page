import React from 'react'
import { expertise } from '../constant';

const Expertise = () => {
  return (
    <div className="text-center mt-20 mb-20 px-4 md:px-12 lg:px-24">
    <h1 className="font-bold text-3xl md:text-4xl mb-12 text-gray-800">
      Driving Property Inquiries to Conversions
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-9 ">
      {expertise.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center w-full p-6"
        >
          <div className="h-35 w-35 flex items-center justify-center mb-4">
            <img
              src={item.icon}
              alt={item.text}
              className="h-full w-full object-contain"
            />
          </div>
          <h5 className="text-xl font-semibold text-gray-800 mb-2">
            {item.text}
          </h5>
          <p className="text-md text-gray-600 py-5 w-105">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Expertise