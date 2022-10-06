import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// import required modules
import { Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper';
import ChallengesCard from '../Challenges/ChallengesCard';

export default function SwiperSlider(props) {
  console.log(props);
  const { data } = props;
  const dataChallenges = data.map((el) => {
    return (
      <SwiperSlide key={el.id}>
        <ChallengesCard
          challenger={el.challenger}
          opponent={el.opponent}
          time={el.time}
          expire={el.expire}
          data={el.data}
          challengerImg={el.challengerImg}
          opponentImg={el.opponentImg}
          discription={el.discription}
        />
      </SwiperSlide>
    );
  });
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
        className='mySwiper'
      >
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
        {dataChallenges}
      </Swiper>
    </>
  );
}
