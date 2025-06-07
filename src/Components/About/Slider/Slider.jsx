import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { adsSliderImg } from '../../../constants';

export default function Slider() {
  return (
    <>
      <Swiper
        dir="rtl"
        className="items-center px-2 my-3 lg:py-6"
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 2500,
        }}
        loop
        modules={[Autoplay]}
      >
        {adsSliderImg.map(({ img }, index) => (
          <SwiperSlide key={index + 1}>
            <img
              src={img}
              className="w-20 md:w-28 transition-all grayscale-[100] hover:grayscale-0"
              alt={`img slider ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
