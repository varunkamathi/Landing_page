import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import herobg from './assets/herobg.png';
import Maestery from './components/Maestery';
import  Service  from './components/Service';
import Navigate from './components/Navigate';


const App = () => {
  return (
    <div  style={{
      backgroundImage: `url(${herobg})`,
      backgroundSize: '100% 60%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      minHeight: '90vh',
    }}>
    <Nav/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
      <Maestery/>
      <Service/>
      <Navigate/>
    </div>
    </div>
    
 )
}

export default App