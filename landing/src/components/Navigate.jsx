import React from 'react';
import { navigate } from '../constant';
import navigete from '../assets/navigate.png';

const Navigate = () => {
  return (
    <div className="text-center mt-20 mb-20 px-4 md:px-12 lg:px-24">
      <h1 className="font-bold text-3xl md:text-4xl mb-12 text-gray-800">
        Navigating Real Estate's Digital Landscape
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Insights for Real Estate Marketing Advantage
      </p>

      <div className="flex flex-col lg:flex-row items-stretch relative gap-10">
        <div className="w-150 lg:w-1/2 flex flex-col justify-center z-10">
          {navigate.map((item, index) => (
            <div
              key={index}
              className="flex items-center rounded-xl bg-slate-100 mx-2 my-2 shadow-md transition transform hover:-translate-y-2 hover:shadow-lg duration-300 p-4"
            >
              <div className="h-20 w-20 flex items-center justify-center mr-4">
                <img
                  src={item.icon}
                  alt={item.text}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-left">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.text}
                </h5>
                <p className="text-md text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 relative flex items-center justify-center">
          <img
            src={navigete}
            alt="Navigate"
            className="w-160 max-w-[1000px] h-175 object-contain lg:-ml-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigate;
