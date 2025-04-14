import React from 'react'
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <nav className='top-0 z-50 py-3 bg-white '>
        <div className='flex justify-between mx-auto container'>
            <div><img className='w-30 h-20' src={logo} /></div>
            <div className='py-1 px-3 border-2 rounded-3xl  w-40 h-10 font-bold text-center '><a href="" className=''>Contact us</a></div>
        </div>
    </nav>
  )
}

export default Nav