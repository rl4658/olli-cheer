// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';



import "../../../CSS/ImageSlider/ImageSlider.css";

export default function ImageSlider({ imageURLs }) {
  return (
    <div className='imageSliderSection'>
      <Swiper
        modules={[EffectFade, Navigation, Scrollbar, A11y, Autoplay, Pagination]}
        className='mySwiper1'
        spaceBetween={false}
        effect="fade"
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        loop={true}

      >
        {imageURLs.map(url => (
          <SwiperSlide key={url}>
            <img src={url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
