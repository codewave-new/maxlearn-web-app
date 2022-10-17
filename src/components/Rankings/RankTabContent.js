import React from 'react';
import RankingPositionCard from './RankingPositionCard';
import RankingTop from './RankingTop';

const RankTabContent = () => {
  const DUMMY_DATA = [
    {
      rankNO: 1,
      name:'Bella Dormanson',
      points:630
    },
    {
      rankNO: 2,
      name:'Bella Dormanson',
      points:630
    },
    {
      rankNO: 3,
      name:'Bella Dormanson',
      points:630
    },

    {
      rankNO: 4,
      name:'Bella Dormanson',
      points:630
    },
    {
      rankNO: 5,
      name:'Bella Dormanson',
      points:630
    },
    {
      rankNO: 6,
      name:'Bella Dormanson',
      points:630
    },
    {
      rankNO: 7,
      name:'Bella Dormanson',
      points:630
    },
  ];
  const rankCards = DUMMY_DATA.map(el=> <RankingPositionCard
    key={el.rankNO} 
    rankNo={el.rankNO}
    userName={el.name}
    points={el.points}/>
    )
  return (
    <div className='rank__content-wrapper'>
      <div className='row'>
        <div className='col-lg-4 col-12 text-center'>
          <div className='achievements__content'>
            <RankingTop />
            <h4>Your achievements are here!</h4>
            <div className='points-content d-flex justify-content-center'>
              <h1>
                87 <small>Points</small>
              </h1>
              <h2>
                1<strong>st</strong>
                <small> Rank</small>
              </h2>
            </div>
          </div>
        </div>
        <div className='col-lg-8 col-12'>
          <div className="scroll-rank-user">
          <RankingPositionCard className='topper' />
          {rankCards}
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default RankTabContent;
