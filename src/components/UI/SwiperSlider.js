import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// import required modules
import { Pagination } from 'swiper';
import ChallengesCard from '../Challenges/ChallengesCard';

export default function SwiperSlider() {
  return (
    <>
      <Swiper
        cssMode={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <ChallengesCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChallengesCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChallengesCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChallengesCard />
        </SwiperSlide>
        <SwiperSlide>
          <ChallengesCard />
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
