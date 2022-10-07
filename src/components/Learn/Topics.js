import React from 'react';
import LearnTopicsSlider from '../UI/Slider/LearnTopicsSlider';

const Topics = () => {
  return (
    <div className='max-learn__topics-wrapper'>
      <div className='topics-head d-flex justify-content-between'>
        <h3>Hot topics for the day</h3>
        <button>View all</button>
      </div>
      <div className='silder-topics-container'>
        <LearnTopicsSlider />
      </div>
    </div>
  );
};

export default Topics;
