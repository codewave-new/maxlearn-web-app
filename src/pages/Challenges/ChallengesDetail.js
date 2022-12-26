import React from 'react';
import { useLocation } from 'react-router-dom';
import ChallengesIntro from '../../components/Questions/ChallengesIntro';

const ChallengesDetail = () => {
  const location = useLocation();
  return (
    <div>
      <ChallengesIntro variant={'challenge'} state={location.state} />
    </div>
  );
};

export default ChallengesDetail;
