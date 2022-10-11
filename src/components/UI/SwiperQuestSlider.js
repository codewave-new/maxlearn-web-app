import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// import required modules
import { Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper';
import QuestCard from '../Home/Quest/QuestCard';

const SwiperQuestSlider = () => {
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
        modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
        className='mySwiperQuest'
      >
        <SwiperSlide>
          <QuestCard />
        </SwiperSlide>
        <SwiperSlide>
          <QuestCard />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperQuestSlider;
