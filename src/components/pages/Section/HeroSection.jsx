import React from 'react'
import Decore from '../../../assets/Decore.png'
import Eclips from '../../../assets/Ellipse.png'
import Play from '../../../assets/play.png'

import Travellerimg from '../../../assets/Traveller1.png'

import ButtonY from '../../ButtonY'

export default function HeroSection() {
  return (
    <div className=' bg-white relative  overflow-x-hidden bg-transparent '>
    <div className='absolute left-0 top-0' >
      <img src={Eclips} alt="" className='sm:w-50 md:w-75 lg:w-full' />
    </div>
    <div className='absolute right-0 top-0 hidden lg:block '>
      <img src={Decore} alt="" className='' />
    </div>
    <div id="content" className=' flex flex-col-reverse  lg:flex-row md:flex-row justify-center items-center w-full p-10 pt-10 bg-transparent'>

      <div id="conleft" className=' lg:w-2/4 md:w-2/4 sm:w-full lg:text-left text-center lg:p-20 pt-10 z-10 '>
        <p className=' text-lg lg:mb-10 mb-5' style={{ color: "rgba(223, 105, 81, 1)" }}>
          Best Destinations around the world
        </p>
        <h1 className='lg:text-6xl md:text-5xl text-4xl lg:mb-10 mb-5 lg:font-extrabold leading-snug' style={{ color: "rgba(24, 30, 75, 1)" }}>
          Travel, enjoy
          and live a new
          and full life
        </h1>
        <p className=' text-sm lg:text-base mb-5' style={{ color: "rgba(94, 98, 130, 1)" }}>
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
        </p>
        <div className='flex items-center'>
        <ButtonY />
<img src={Play} alt="" className='ml-10 lg:w-auto w-20' />
<span className='text-xs' >Play Demo</span>
        </div>
        
      </div> 
      <div id="conright" className='lg:w-2/4 md:w-2/4 sm:w-full h-full pt-20 bg-transparent z-10 flex justify-start ' >
        <img src={Travellerimg} alt=""  className='z-10 h-full ' />
      </div>

    </div>


  </div>
  )
}
