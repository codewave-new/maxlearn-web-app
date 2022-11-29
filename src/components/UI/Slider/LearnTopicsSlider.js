import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Autoplay, Mousewheel, Keyboard } from 'swiper';
import TopicsCard from '../../Learn/TopicsCard';

const LearnTopicsSlider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        // }}
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
        modules={[Navigation, Autoplay, Mousewheel, Keyboard]}
        className='mySwiperTopics'
      >
        <SwiperSlide>
          <TopicsCard />
        </SwiperSlide>
        <SwiperSlide>
          <TopicsCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LearnTopicsSlider;
