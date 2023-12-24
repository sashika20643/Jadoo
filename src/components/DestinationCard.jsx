import React from 'react'
import Navico from '../assets/navico.png'

export default function DestinationCard({name,price,days,image}) {
  return (
    <div className='mt-10 flex-shrink-0 w-full lg:w-1/4 md:w-6/12 md:mr-10 mr-0' style={{color:"rgba(94, 98, 130, 1)"}}>
      <img src={image} className='w-full' alt="" />
      <div className='-translate-y-1/2 bg-white px-5'>

     
      <div className='pt-5 flex justify-between items-center mb-5'>
        <p className='font-bold text-base lg:text-base ' >{name}</p>
        <p>{price}</p>
      </div>
      <div className='flex items-center'>
      <img src={Navico} alt="" className='mr-2' /> 
      <p> {days} Days trip</p>
      </div>
   
    </div>
    </div>
  )
}
