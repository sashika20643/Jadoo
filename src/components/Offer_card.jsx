import React from 'react'

export default function Offer_card({name,description,image}) {
    return (
      <div className='text-center mt-5 flex flex-shrink-0 flex-col justify-center items-center p-5 lg:w-1/4 md:w-1/2 w-full  '>
          <div>
          <img src={image} alt="" />
          </div>
          <h2 className='text-lg font-bold mt-2 mb-2'>
          {name}  
          this is it
          </h2>
      <p>
      {description}   
      </p>
     
      </div>
    )
}
