import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const options = {
  modules: [Autoplay],
  speed: 500,
  spaceBetween: 50,
  slidesPerView: 3,
  autoplay: {
    delay: 3000
  },
  grabCursor: true,
  loop: true,
}

const Carousel = ({ inputDataArray }) => {
  return (
    <Swiper {...options}>
      {
        inputDataArray.map(item => (
          <SwiperSlide key={uuidv4()}>
            {item}
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Carousel
