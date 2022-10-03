import React from 'react';
import ChallengeSlider from '../UI/Slider';
import SwiperSlider from '../UI/SwiperSlider';

const Challenges = () => {
  return (
    <section className='wax__home-challenges-wrapper'>
      <div className='d-flex justify-content-between'>
        <h5>Challenges for you </h5>
        <a href=''>View all</a>
      </div>
      <div className='wax__home-challenges-slider-wrapper'>
        {/* <ChallengeSlider/> */}
        <SwiperSlider />
      </div>
    </section>
  );
};

export default Challenges;
