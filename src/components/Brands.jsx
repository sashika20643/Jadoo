import React from 'react'

export default function Brands({img}) {
  return (
    <div className='w-1/2 md:w-1/3 lg:w-1/5 mr-5 flex-shrink-0'>
      <img src={img} alt="" />
    </div>
  )
}
