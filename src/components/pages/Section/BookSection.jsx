import React from 'react'
import book1 from '../../../assets/book1.png'
import book2 from '../../../assets/book2.png'
import book3 from '../../../assets/book3.png'
import bookimg from '../../../assets/bookimg.png'
import Step from '../../Step'

export default function BookSection() {

    let steps=[

        {name:"Choose Destination",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",icon:book1},
        {name:"Make Payment",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",icon:book2},
        {name:"Reach Airport on Selected Date",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",icon:book3}

    ]
  return (
    <div className='mt-20 flex flex-col-reverse lg:flex-row items-center justify-center'>
      <div id="bookleft" className='text-center lg:text-left'> 
<p className='text-base ' style={{color:"rgba(94, 98, 130, 1)"}}>Easy and Fast</p>
<h1 className='text-2xl lg:text-4xl md:text-3xl mt-10 font-bold mb-10' style={{color:"rgba(20, 24, 62, 1)"}}>
Book your next trip 
in 3 easy steps
</h1>
<div>
    {
(
    steps.map((step,index)=>(
        <Step key={index} name={step.name} desc={step.desc} icon={step.icon} />

    )



    )
)

    }
</div>

      </div>

      <div id="bookright">
<img src={bookimg} alt="" />
      </div>
    </div>
  )
}
