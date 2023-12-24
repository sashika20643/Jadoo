import React from 'react'
import DestinationCard from '../../DestinationCard'
import Europ from "../../../assets/Europ.png"
import London from "../../../assets/London.jpg"
import rome from "../../../assets/rome.png"

export default function DestinationSection() {
let destinatons=[
    {name:"London, UK",price:"$4.2k",days:"12 Days Trip",image:London},
    {name:"Rome, Italty",price:"$5,42k",days:"10 Days Trip",image:rome},
    {name:"Full Europe",price:"$15k",days:"28 Days Trip",image:Europ}
]

  return (
    <div className='mt-20 lg:mt-20 text-center'>
    <p className='text-base' style={{ color: "rgba(94, 98, 130, 1)" }}>Destinations</p>
    <h1 className='mt-2 text-2xl lg:text-4xl lg:mb-20 mb-2' style={{ color: "rgba(20, 24, 62, 1)" }}>We destination Best Services</h1>
    <div id="cardcont" className=' flex w-full overflow-x-auto justify-between'>
      { (
        destinatons.map((destination, index) => (
          <DestinationCard key={index} name={destination.name} days={destination.days} image={destination.image} price={destination.price} />
        ))
      ) }
    </div>
  </div>
  )
}
