import React from 'react';

const TopicCard = ({ data }) => {
  return (
    <div className='topic-card-wrapper'>
      <div className='card-name'>{data.name}</div>
      <div className='card-number'>{data.cards}</div>
    </div>
  );
};

export default TopicCard;
