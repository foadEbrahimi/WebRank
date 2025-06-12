import React from 'react';

// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import FeedCard from './FeedCard';

import { FeedbackInfo } from '../../constants';

export default function Feedback() {
  return (
    <div className="py-12 bg-Primary space-y-10  2xl:px-44">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className=""
        spaceBetween={50}
        slidesPerView={1}
      >
        {FeedbackInfo.map(person => (
          <SwiperSlide>
            <FeedCard {...person} key={person.id} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" w-full text-center px-4"></div>
    </div>
  );
}
