import React from 'react'
import Navbar from './Navbar'
import Hand from "./images/Hand.webp"
import G from "./images/G.webp"
import Star from "./images/Star.png"
import { BiStopwatch } from 'react-icons/bi'
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import { NavLink } from 'react-router-dom'


const Front = () => {
  useGSAP(() => {
    gsap.from('.title', {
      opacity: 0,
      scale: 0,
      duration: 1.5,
      ease: "elastic.out"
    })
    gsap.from('.hand', {
      y: 300,
      opacity: 0,
      scale: 0,
      duration: 1.5,
      ease: "ease.in"
    })
    gsap.from('.left', {
      x: -300,
      opacity: 0,
      scale: 0,
      duration: 1.5,
      ease: "ease.in"
    })
    gsap.from('.right', {
      x: 300,
      opacity: 0,
      scale: 0,
      duration: 1.5,
      ease: "ease.in"
    })
  }
  )
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div className='bg-emerald-900 w-[100vw] flex justify-center items-center relative'>
        <h1 className="absolute left-0 md:left-[20%] top-32 md:top-40  text-[12vw] md:text-[8vw]  textcolor poppins-medium w-[100vw] md:w-[60vw] text-center title z-10">Mortgages
          made simple</h1>

        <div className='flex flex-col md:flex-row justify-evenly items-center'>

          <div className='mt-60 left flex flex-col items-center justify-center '>
            <div className='mb-5'>
            <NavLink to="/calculator" className='bg-white w-72 p-2 rounded-md poppins-regular mb-10'>Calculator</NavLink>
            </div>
            <button className='text-emerald-900 bgcolor w-72 rounded-full poppins-regular h-16 mb-3 hover:bg-emerald-900 hover:text-white '>Start my approval</button>
            <div className='flex justify-center items-center text-white text-sm poppins-regular'><BiStopwatch /> 3 min
              | No credit impact</div>
          </div>

          <img src={Hand} alt="Hand" className='hover:scale- w-[530px] pt-3 md:pt-72 ml-10 md:ml-20 hand' />

          <div className='mt-0 md:mt-52 right absolute md:static top-[725px] bg-emerald-950 md:bg-transparent rounded-md'>
            <div className='flex items-center justify-center'>
              <img src={G} alt="G" className='w-10 h-10' />
              <img src={Star} alt="Sta0" className='w-36 ' />
            </div>
            <div className='poppins-regular text-white text-[10px] ml-5'>4.6 Stars | 3177 Google reviews</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Front
