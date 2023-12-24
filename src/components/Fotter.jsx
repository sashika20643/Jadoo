import React from 'react'
import Linkgroup from './Linkgroup'
import twitter from '../assets/twitter.png'
import linkdin from '../assets/linkdin.png'
import fb from '../assets/fb.png'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'

export default function Fotter() {
    let linkcollection=[
        {name:"Company",links:["About","Careers","Mobile"]},
        {name:"Contact",links:["Help/FAQ","Press","Affilates"]},
        {name:"More",links:["Airlinefees","Airline","Low fare tips"]},

    ]
  return (
    <div className='flex flex-wrap mt-20 mb-10  justify-around p-5 '>
      <div className='w-1/5 lg:1/5 mr-5 lg:mr-0 flex-shrink-0 mb-3'>
<h1 className='text-2xl lg:4xl md:3xl font-extrabold mb-2'>Jadoo.</h1>
<p className='text-sm'>Book your trip in minute, get full
Control for much longer.
</p>
      </div>
{linkcollection.map(
(link,index)=>(
<Linkgroup name={link.name}  key={index} links={link.links}/>
)
)}
      <div>
<div className='flex justify-around'>
<img src={fb} alt="" />
<img src={linkdin} alt="" />
<img src={twitter} alt="" />
</div>
<h2 className='font-bold text-base text-center mb-5 mt-5'>Discover our app</h2>
<div className='flex justify-around'>
      <img src={playstore} alt="" />
<img src={appstore} alt="" />
      </div>
      </div>
    
    </div>
  )
}
