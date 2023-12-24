import React from 'react'

export default function Linkgroup({name,links}) {
  return (
    <div className='mr-5 lg:mr-0 w-2/5 lg:w-auto mb-3'>
      <h2 className='font-bold mb-5'>{name}</h2>
      {(
        links.map(
(link,index)=>(
<p key={index} className='mb-2'>{link}</p>
)

        )
      )}
    </div>
  )
}
