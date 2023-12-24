import React from 'react'


export default function Testomonial({name,desc,img,location}) {
  return (
    <div className='flex flex-col justify-center lg:justify-center items-center mt-10 lg:mt-0 ' style={{color:"rgba(94, 98, 130, 1)"}}>
      <img src={img} alt="" />
      <p className='mt-5'>
{desc}
      </p>
      <div className='text-center mt-5'>
        <h3 className='text-xl font-bold'>{name} </h3>
        <p>{location}</p>
      </div>
    </div>
  )
}
