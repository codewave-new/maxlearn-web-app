import React from 'react';
import Modal from '../../UI/Modal';
import { useNavigate } from 'react-router';
import QuestionCard, {
  DetailComponent,
  ThumNailComponent,
} from '../../Common/QuestionCard.js/QuestionCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Autoplay,
  Mousewheel,
  Keyboard,
  Pagination,
  EffectCards,
} from 'swiper';
import { CloseButton } from '../../../assets';

const data = [
  {
    img: 'https://res.cloudinary.com/dysdy7hjr/image/upload/v1670755725/Group_5_rcffqr.svg',
    heading1: 'Lorem ipm dolor sit amet consectur demate amesecture!',
    detail1:
      'Sed ut perspiciatis unde omnis iste natus erro sitollseduptatem accu san tium doloremque la udantiu mssedam. Abillo inventore verit atieql uasi architectolbeatae vitae dicta sunt explicl abo. Nemo enim ipsam voluptatem.',
    heading2:
      'Lorem ipm dolor sit amet consectur demate lorem sit amet amesecture!',
    detail2:
      'Sed ut perspiciatis unde omnis iste natus erro sitollseduptatem accusan tium doloremque la udantiu mssedam. Abillo inventore veritatieql uasi architectolbeatae vitae dicta sunt explicl abo. Nemo enim ipsamvolup tatem.',
  },
  {
    img: 'https://res.cloudinary.com/dysdy7hjr/image/upload/v1670755725/Group_5_rcffqr.svg',
    heading1: 'Lorem ipm dolor sit amet consectur demate amesecture!',
    detail1:
      'Perspiciatis unde omnis iste natus erro sitollseduptatem accu san tium doloremque la udantiu mssedam. Abillo inventore verit atieql uasi architectolbeatae vitae dicta sunt explicl abo. Nemo enim ipsam voluptatem.',
    heading2:
      'Lorem ipm dolor sit amet consectur demate lorem sit amet amesecture!',
    detail2:
      'Sed ut perspiciatis unde omnis iste natus erro sitollseduptatem accusan tium doloremque la udantiu mssedam. Abillo inventore veritatieql uasi architectolbeatae vitae dicta sunt explicl abo. Nemo enim ipsamvolup tatem.',
  },
  {
    img: 'https://res.cloudinary.com/dysdy7hjr/image/upload/v1670755725/Group_5_rcffqr.svg',
    heading1: 'Lorem ipm dolor sit amet consectur demate amesecture!',
    detail1:
      'Perspiciatis unde omnis iste natus erro sitollseduptatem accu san tium doloremque la udantiu mssedam. Abillo inventore verit atieql uasi architectolbeatae vitae dicta sunt explicl abo. Nemo enim ipsam voluptatem.',
    heading2:
      'Lorem ipm dolor sit amet consectur demate lorem sit amet amesecture!',
    detail2:
      'Sed ut perspiciatis unde omnis iste natus erro sitollseduptatem accusan tium doloremque la udantiu mssedam. Abillo inventore veritatieql uasi architectolbeatae vitae dicta sunt explicl abo. Nemo enim ipsamvolup tatem.',
  },
];

const FlashCard = () => {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate('/learn/topic-detail');
  };
  return (
    <div className='flash-card-wrapper'>
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Autoplay, Mousewheel, Keyboard, EffectCards]}
        className='mySwiperCatergory'
        navigation={{
          prevEl: '.previous',
          nextEl: '.nextButton',
        }}
        // modules={[EffectCards]}
      >
        {data.map((value, i) => {
          return (
            <SwiperSlide key={i}>
              <QuestionCard
                className={'flash_card'}
                leftClassName='leftClassName'
                rightClassName='rightClassName'
              >
                <ThumNailComponent>
                  {/* <img
                  src={value.img}
                  alt='no image'
                  height='434px'
                  width='100%'
                ></img> */}
                </ThumNailComponent>
                <DetailComponent>
                  {' '}
                  <h3>{value.heading1}</h3>
                  <h5>{value.detail1}</h5>
                  <h3 className='mt-4'>{value.heading2}</h3>
                  <h5>{value.detail2}</h5>
                  <div className='swiper_pagination_flashCard'>
                    <span className='page_index'>
                      {i + 1} / {data.length}
                    </span>
                    <span className='previous'>
                      <span>{'<'}</span>
                    </span>
                    <span className='nextButton'>
                      <span>{'>'}</span>
                    </span>
                  </div>
                </DetailComponent>
              </QuestionCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className='detail_close flash-card-wrapper__close_button'
        onClick={handleCLick}
      >
        <CloseButton.default />
      </button>
    </div>
  );
};

export default FlashCard;
