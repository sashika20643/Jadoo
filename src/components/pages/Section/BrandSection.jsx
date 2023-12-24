import React from 'react'
import brand1 from '../../../assets/brand1.png'
import brand2 from '../../../assets/brand2.png'
import brand3 from '../../../assets/brand3.png'
import brand4 from '../../../assets/brand4.png'
import brand5 from '../../../assets/brand5.png'
import Brands from '../../Brands'

export default function BrandSection() {
    let brands = [
        {img:brand1},
        {img:brand2},
        {img:brand3},
        {img:brand4},
        {img:brand5}
    ]
  return (
    <div className='flex  items-center w-full overflow-x-auto lg:overflow-x-hidden mt-28 mb-10'>
      {(brands.map(
(brand,index)=>(
<Brands img={brand.img} key={index} />    
)

      ))}
    </div>
  )
}
