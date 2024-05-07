import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import slider1 from '../../../../public/images/Slider/img1.png';
import slider2 from '../../../../public/images/Slider/img2.png';
import slider3 from '../../../../public/images/Slider/img3.png';
import slider4 from '../../../../public/images/Slider/img4.png';
import slider5 from '../../../../public/images/Slider/img5.png';
import { Pagination } from 'evergreen-ui';
export default function Slider() {
  return (
    <Splide
      className="items-center"
      aria-label="My Favorite Images"
      options={{
        loop: true,
        perPage: 5,
        focus: 'center',
        autoplay: true,
        direction: 'rtl',
        Pagination: false,
        arrows: false,
        breakpoints: {
          500: {
            perPage: 2,
          },
          700: {
            perPage: 3,
          },
          800: {
            perPage: 4,
          },
          1200: {
            perPage: 6,
          },
          1300: {
            perPage: 7,
          },
        },
        // paginationDirection: 'rtl',
      }}
    >
      <SplideSlide>
        <img
          src={slider1}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={slider2}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={slider3}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={slider4}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={slider5}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={slider1}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={slider2}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={slider3}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={slider4}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={slider5}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={slider1}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={slider2}
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
    </Splide>
  );
}
