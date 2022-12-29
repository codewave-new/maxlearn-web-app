import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Mousewheel, Keyboard, Pagination } from 'swiper';
import CatergoryCard from '../../Learn/Category/CatergoryCard';
import { data } from '../../Learn/Category/data';

const LearnCategorySlider = ({learnCategoryLists}) => {
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
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Mousewheel, Pagination, Keyboard]}
        className='mySwiperCatergory'
      >
        {learnCategoryLists?.length?learnCategoryLists.slice(0, 6).map((element, i) => {
          return (
            <SwiperSlide key={i}>
              <CatergoryCard     
              data={{
                progress:element?.progressPercent,
                title:element?.title,
                count:element?.subjectsCount,
                icon:element?.categoryIcon,
                colorr:element?.categoryColor
                }}
              />
            </SwiperSlide>
          )
        }):''}
      </Swiper>
    </>
  );
};

export default LearnCategorySlider;
