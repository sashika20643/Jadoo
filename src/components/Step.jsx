import React from 'react'

export default function Step({name,desc,icon}) {
  return (
    <div className='flex items-center text-left mb-3' >
      <div  className='mr-5'>
<img src={icon} alt=""  />
      </div>
      <div>
<h2 className='text-base font-semibold' style={{color:"rgba(94, 98, 130, 1)"}}> {name} </h2>
<p className='text-sm' style={{color:"rgba(94, 98, 130, 1)"}}>{desc}</p>
      </div>
    </div>
  )
}
