import React from 'react';
import RankingPositionCard from '../Rankings/RankingPositionCard';

const MembersList = () => {
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
    <div className='max__ranking-wrapper container'>
      <div className='ranking-card'>
        <div className='rank__content-wrapper'>
          <div className='scroll-rank-user'>
            {DUMMY_DATA.map((data) => (
              <RankingPositionCard
                key={data.rankNO}
                rankNo={data?.rankNO}
                userName={data?.name}
                points={data?.points}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersList;
