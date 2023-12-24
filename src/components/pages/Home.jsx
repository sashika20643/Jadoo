import React from 'react'
import HeroSection from './Section/HeroSection'
import OfferSection from './Section/OfferSection'
import DestinationSection from './Section/DestinationSection'
import BookSection from './Section/BookSection'
import TestomonialSection from './Section/TestomonialSection'
import BrandSection from './Section/BrandSection'




export default function Home() {
  return (
   <div>
    <HeroSection/>
    <div className='px-10 lg:px-28'> 
    <OfferSection/>
    <DestinationSection/>
    <BookSection/>
    <TestomonialSection/>
<BrandSection/>
    </div>

   </div>
  )
}
