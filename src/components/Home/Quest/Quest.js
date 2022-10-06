import React from 'react';
import SwiperQuestSlider from '../../UI/SwiperQuestSlider';

const Quest = () => {
  return (
    <section className='wax__home-quest-wrapper'>
      <div className='wax__home-quest-container'>
        <div className='d-flex justify-content-between '>
          <h5>Quest and Certs for you</h5>
          <a href=''>
            <h6>View all</h6>
          </a>
        </div>
        <div className='wax__home-quest-slider-wrapper'>
          {/* <ChallengeSlider/> */}
          <SwiperQuestSlider />
        </div>
      </div>
    </section>
  );
};

export default Quest;
