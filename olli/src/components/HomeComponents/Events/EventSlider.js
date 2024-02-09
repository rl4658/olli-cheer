

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import "../../../CSS/Events/EventSlider.css"


// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export default function EventSlider({ Cards }) {

  return (
    <div className='eventSlider'>
      <>
        <Swiper
          slidesPerView={3}
          freeMode={true}
          spaceBetween={20}
          centeredSlides={false}
          mousewheel={true}
          loop={true}

          pagination={{ clickable: true }}

          modules={[FreeMode, Pagination]}
          className="es"

        >


          {
            Cards.map((card, index) => (
              <>

                <SwiperSlide key={index}>{card}</SwiperSlide>

              </>
            ))}



        </Swiper>
      </>
    </div>

  );
}