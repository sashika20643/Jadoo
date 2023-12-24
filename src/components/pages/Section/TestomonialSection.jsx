import React, { useState } from 'react'
import profile from '../../../assets/profile.png'
import profile2 from '../../../assets/profile2.png'
import profile3 from '../../../assets/profile3.png'
import Testomonial from '../../Testomonial';

export default function TestomonialSection() {
   let  testomonials=[
    {name:"mike tyler",desc:"“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",img:profile,location:"Lahore, Pakistan"},
    {name:"ross white",desc:"xn ohe talkinddg plintoked pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",img:profile2,location:"CEO @ QrioMatrix"},
    {name:"danny sung",desc:"Sure last upon he same as knew nextOn the Windows talking painted pasture yet its express parties use. . Of believed or diverted no.",img:profile3,location:"CEO of Red Button"},]
 const [test_id,setTestId]=useState(0);

 
  return (
    <div className='flex justify-center items-center flex-col lg:flex-row mt-20'>
        <div className='text-center lg:text-left w-full lg:w-1/2 pr-0 lg:pr-5'>
< p className='text-base font-semibold' style={{color:"rgba(94, 98, 130, 1)"}}>
Testimonials
</p>
 <h1 className='text-2xl lg:text-4xl md:text-3xl font-bold mb-20 mt-5 ' style={{color:"rgba(20, 24, 62, 1)"}}>
 What people say
about Us.
    </h1> 

    {testomonials.map((testimonial, index) => (
         
            <input type="radio" key={index} name="testimonials" className='mr-10 focus:outline-none focus:border-none accent-slate-500 ' onClick={()=>setTestId(index)} style={{ accentColor:"rgba(57, 66, 93, 1)"}} />
         
         
        ))}
       </div>

        <div id="testright" className='w-full lg:w-1/2 pl-0 lg:pl-3 shadow-lg'>
<Testomonial name={testomonials[test_id].name} desc=   {testomonials[test_id].desc}  img={testomonials[test_id].img} location={testomonials[test_id].location} />
        </div>
    </div>
  )
}
