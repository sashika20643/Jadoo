import React, { useEffect, useState } from 'react';
import weather from '../../../assets/weather.png';
import flight from '../../../assets/flight.png';
import events from '../../../assets/events.png';
import offerdec from '../../../assets/offerdec.png';

import custermization from '../../../assets/custermization.png';
import OfferCard from '../../Offer_card';

export default function OfferSection() {
  const offer = [
    { name: "Calculated Weather", description: "Built Wicket longer admire do barton vanity itself do in it.", image: weather },
    { name: "Best Flights", description: "Engrossed listening. Park gate sell they west hard for the.", image: flight },
    { name: "Customization", description: "We deliver outsourced aviation services for military customers", image: custermization },
    { name: "Local Events", description: "Barton vanity itself do in it. Preferd to men it engrossed listening. ", image: events }

  ];


  return (
    <div className='mt-5 lg:mt-20 text-center relative'>
      <img src={offerdec} alt="" className='absolute top-0 right-0 -z-10' />
      <p className='text-base' style={{ color: "rgba(94, 98, 130, 1)" }}>CATEGORY</p>
      <h1 className='mt-2 text-2xl lg:text-4xl lg:mb-20 mb-2' style={{ color: "rgba(20, 24, 62, 1)" }}>We Offer Best Services</h1>
      <div id="cardcont" className=' flex w-full overflow-x-auto'>
        { (
          offer.map((offer, index) => (
            <OfferCard key={index} name={offer.name} description={offer.description} image={offer.image} />
          ))
        ) }
      </div>
    </div>
  );
}
