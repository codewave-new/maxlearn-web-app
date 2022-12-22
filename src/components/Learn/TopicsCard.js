import React from 'react';
import { LearnBadge, LearnUsers } from '../../assets';

const TopicsCard = ({ data }) => {
  return (
    <div className='max-learn__topics-card'>
      <h5>{data.name}</h5>
      <div className='topic-content d-flex justify-content-between'>
        <p>
          <LearnBadge.default /> <small>Level -</small> {data.level}
        </p>
        <p>
          <LearnUsers.default /> <small>{data.people}</small> People
        </p>
      </div>
    </div>
  );
};

export default TopicsCard;
