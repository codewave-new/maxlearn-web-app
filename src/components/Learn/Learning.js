import React from 'react';
import LearningCard from './LearningCard';

function Learning() {
  return (
    <div className='max-learn__learning-wrapper'>
      <div className='d-flex justify-content-between'>
        <h3>Continue your learning</h3>
        <button>View all</button>
      </div>
      <div className='row learning-card-row'>
        <div className='col-4'>
          <LearningCard />
        </div>
        <div className='col-4'>
          <LearningCard />
        </div>
        <div className='col-4'>
          <LearningCard />
        </div>
      </div>
      <div className='row learning-card-row'>
        <div className='col-4'>
          <LearningCard />
        </div>
        <div className='col-4'>
          <LearningCard />
        </div>
        <div className='col-4'>
          <LearningCard />
        </div>
      </div>
    </div>
  );
}

export default Learning;
