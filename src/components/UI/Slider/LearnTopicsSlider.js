import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Autoplay, Mousewheel, Keyboard } from 'swiper';
import TopicsCard from '../../Learn/TopicsCard';

const data = [
  {
    name: 'Providing Exceptional Customer Service',
    level: 'Awareness',
    people: '9',
  },
  {
    name: 'Providing Exceptional Customer Service',
    level: 'Awareness',
    people: '7',
  },
  {
    name: 'Providing Exceptional Customer Service',
    level: 'Awareness',
    people: '9',
  },
  {
    name: 'Providing Exceptional Customer Service',
    level: 'Awareness',
    people: '6',
  },
];

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
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Autoplay, Mousewheel, Keyboard]}
        className='mySwiperTopics'
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
      >
        {data.map((element, i) => {
          return (
            <>
              <SwiperSlide key={i}>
                <TopicsCard data={element} />
              </SwiperSlide>
            </>
          );
        })}

        {/* <SwiperSlide>
          <TopicsCard />
        </SwiperSlide>
        <SwiperSlide>
          <TopicsCard />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default LearnTopicsSlider;
