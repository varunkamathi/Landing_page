import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import herobg from './assets/herobg.png'
import Maestery from './components/Maestery'
import Service from './components/Service'
import Navigate from './components/Navigate'
import Converstion from './components/Converstion'
import Inquries from './components/Inquries'
import Expertise from './components/Expertise'
import Mind from './components/Mind'
import Testmonial from './components/Testmonial'
import Question from './components/FAQItem'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <div>
        <Nav />
        <div className='max-w-7xl mx-auto px-6' style={{
          backgroundImage: `url(${herobg})`,
          backgroundSize: '100% 75%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          minHeight: '90vh',
        }}>
        <HeroSection />
        </div>
        <div className='max-w-7xl mx-auto pt-20 px-6'>
          <Maestery />
          <Service />
          <Navigate />
          <Converstion />
          <Inquries />
          <Expertise />
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-white via-blue-50 to-pink-100">
        <div className='max-w-7xl mx-auto px-6'> 
          <Mind/>
          <Testmonial/>     
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-6'>
        <Question />
        </div>
        <div className="bg-gradient-to-r from-white via-blue-50 to-pink-100">
        <div className='max-w-7xl mx-auto px-6'> 
        <ContactUs/>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-6'>
        <Footer/>
        </div>
    </div>
  )
}

export default App
