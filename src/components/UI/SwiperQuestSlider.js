import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// import required modules
import { Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper';
import QuestCard from '../Home/Quest/QuestCard';

const SwiperQuestSlider = (props) => {
  console.log(props.data.data, '22');
  const [certData, setCertData] = useState(['1', '2', '3']);
  const [loader, setLoader] = useState(false);

  console.log(certData.length, 'c');

  useEffect(() => {
    if (props?.data?.data.length) {
    }
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
        className='mySwiperQuest'
      >
        {props.data?.data.length > 0
          ? props.data?.data.map((all, i) => {
              return (
                <SwiperSlide key={i}>
                  <QuestCard
                    className={''}
                    data={all}
                    type={all.type}
                    multiChip={
                      all.type === 'cert'
                        ? [all.certResults?.certStatus, 'CERTS']
                        : [all.questResults?.status, 'QUEST']
                    }
                  />
                  ;
                </SwiperSlide>
              );
            })
          : ''}
        ;
        {/* <SwiperSlide>
          <QuestCard />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default SwiperQuestSlider;
