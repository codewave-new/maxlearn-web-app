import React from 'react';
// import { DeckColor } from '../../../assets';

const TopicCard = ({ data }) => {
  return (
    <div
      className='topic-card-wrapper'
      // style={{
      //   // backgroundImage: `{url(${DeckColor.default})}`,
      //   // backgroundImage: <DeckColor.default></DeckColor.default>,
      //   // color: 'yellow',
      // }}
    >
      {/* <DeckColor.default /> */}
      <div className='card-name'>{data?.title}</div>
      <div className='card-number'>{data.flashcardCount} Flash Cards</div>
    </div>
  );
};

export default TopicCard;
