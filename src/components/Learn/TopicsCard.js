import React from 'react';
import { LearnBadge, LearnUsers } from '../../assets';

const TopicsCard = () => {
  return (
    <div className='max-learn__topics-card'>
      <h5>Providing Exceptional Customer Service</h5>
      <div className='topic-content d-flex justify-content-between'>
        <p>
          <LearnBadge.default /> <small>Level -</small> Awareness
        </p>
        <p>
          <LearnUsers.default /> <small>9</small> People
        </p>
      </div>
    </div>
  );
};

export default TopicsCard;
