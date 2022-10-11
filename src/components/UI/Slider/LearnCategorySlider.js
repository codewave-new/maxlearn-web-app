import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Mousewheel, Keyboard, Pagination } from 'swiper';
import CatergoryCard from '../../Learn/CatergoryCard';

const LearnCategorySlider = () => {
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Mousewheel, Pagination, Keyboard]}
        className='mySwiperCatergory'
      >
        <SwiperSlide>
          <CatergoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CatergoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CatergoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CatergoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CatergoryCard />
        </SwiperSlide>
        <SwiperSlide>
          <CatergoryCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LearnCategorySlider;
