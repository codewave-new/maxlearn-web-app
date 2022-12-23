import React from 'react';
import RankingPositionCard from './RankingPositionCard';
import RankingTop from './RankingTop';

const SquadRankings = () => {
  const DUMMY_DATA = [
    {
      rankNO: 1,
      name: 'Bella Dormanson',
      points: 630,
    },
    {
      rankNO: 2,
      name: 'Bella Dormanson',
      points: 630,
    },
    {
      rankNO: 3,
      name: 'Bella Dormanson',
      points: 630,
    },

    {
      rankNO: 4,
      name: 'Bella Dormanson',
      points: 630,
    },
    {
      rankNO: 5,
      name: 'Bella Dormanson',
      points: 630,
    },
    {
      rankNO: 6,
      name: 'Bella Dormanson',
      points: 630,
    },
    {
      rankNO: 7,
      name: 'Bella Dormanson',
      points: 630,
    },
  ];
  return (
    <div className='rank__content-wrapper'>
      <div className='row'>
        <div className='col-lg-4 col-12 text-center'>
          <div className='achievements__content'>
            <RankingTop />
          </div>
        </div>
        <div className='col-lg-8 col-12'>
          <div className='scroll-rank-user'>
            <RankingPositionCard className='topper' />
            {DUMMY_DATA.map((el) => (
              <RankingPositionCard
                key={el.rankNO}
                rankNo={el.rankNO}
                userName={el.name}
                points={el.points}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquadRankings;
