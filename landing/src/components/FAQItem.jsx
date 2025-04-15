import React, { useState } from 'react'
import upArrow from '../assets/up.png'
import downArrow from '../assets/down.png'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-white p-0 shadow'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center cursor-pointer px-4 py-3  ${
          isOpen ? 'bg-blue-500 text-white ' : 'bg-white text-gray-800'
        } transition-colors duration-300`}
      >
        <h3 className='text-lg font-semibold'>{question}</h3>
        <img
          src={isOpen ? downArrow : upArrow}
          alt='toggle'
          className='w-5 h-5 transition-transform duration-300'
        />
      </div>
      {isOpen && (
        <div className='px-4 pb-4'>
          <p className='mt-3 text-gray-600 text-sm md:text-base'>{answer}</p>
        </div>
      )}
    </div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: '1. What services does Osumare provide for pharma marketing?',
      answer:
        'Osumare offers SEO, social media campaigns, and regulatory-compliant strategies tailored to pharma brands.',
    },
    {
      question: '2. How does Osumare ensure compliance with pharma regulations?',
      answer:
        'Our team stays updated with global and regional pharma marketing laws to ensure every campaign is compliant.',
    },
    {
      question: '3. Can I track the performance of my marketing campaigns?',
      answer:
        'Yes, we provide detailed analytics and reports to monitor the success and ROI of your campaigns.',
    },
  ]

  return (
    <div className='text-center items-center px-4 md:px-8 mb-20'>
      <h1 className='font-bold text-3xl md:text-4xl mb-5 text-gray-800'>
        Frequently Asked Questions
      </h1>
      <p className='text-lg text-gray-600 max-w-xl mx-auto mb-10'>
      Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand      </p>

      <div className='max-w-4xl mx-auto p-6 md:p-10'>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
