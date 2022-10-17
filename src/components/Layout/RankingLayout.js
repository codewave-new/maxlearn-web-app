import React from 'react';
import RankingTab from '../UI/Tabs/RankingTab';
import QuestCard from '../Home/Quest/QuestCard';
import RankTabContent from '../Rankings/RankTabContent';

const RankingLayout = () => {
  return (
    <div className='max__ranking-wrapper container'>
      <ul>
        <li>Squad</li>
      </ul>
      <div className='ranking-card'>
        <RankingTab tabs={() => <RankTabContent />} />
      </div>
    </div>
  );
};

export default RankingLayout;
