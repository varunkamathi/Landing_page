import React from 'react';

const ContactUs = () => {
  return (
    <div className="px-6 py-10 md:px-18 md:py-18 ">
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl md:text-4xl mb-4 text-gray-800">
          Connect with Our Digital Marketing Experts
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Reach out for tailored strategies and results-driven solutions. Let's elevate your online presence together.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-slate-100 p-6 md:p-10 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col text-left">
              <label className="mb-1 text-black font-bold">Name</label>
              <input
                type="text"
                placeholder='Enter your name'
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="mb-1 text-black font-bold">Phone</label>
              <input
                type="tel"
                placeholder='Enter your number'
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="mb-1 text-black font-bold">Email</label>
              <input
                type="email"
                placeholder='Enter your email'
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
            <div className="flex flex-col text-left">
              <label className="mb-1 text-black font-bold">Message</label>
              <textarea
                rows="6"
                placeholder='Enter your message'
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
            </div>
          </div>
        </div>

        
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 w-60 rounded-2xl text-2xl h-12 text-white font-bold hover:bg-blue-600 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
