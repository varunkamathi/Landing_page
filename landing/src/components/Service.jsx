import React from 'react';
import { service } from '../constant';

const Service = () => {
  return (
    <div className="mt-20 min-h-[800px] px-6 text-center">
      <div className="text-center mb-12">
        <h2 className="font-bold text-3xl md:text-4xl mb-4 text-gray-800">
          Our Service Offerings
        </h2>
        <p className="text-lg text-gray-600">
          Strategies that Drive Property Market Excellence
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  ">
        {service.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center rounded-xl bg-slate-100 mx-2 my-2 shadow-md transition transform hover:-translate-y-2 hover:shadow-lg duration-300 m-5">
            <div className="h-20 w-20 flex items-center justify-center mb-4">
              <img
                src={item.icon}
                alt={item.text}
                className="h-full w-full object-contain"
              />
            </div>
            <h5 className="text-xl font-semibold text-gray-800 mb-2">
              {item.text}
            </h5>
            <p className="text-md text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <button className='bg-blue-500 w-60 rounded-4xl text-xl h-15 text-white mt-15'>Get started</button>

    </div>
  );
};

export default Service;
