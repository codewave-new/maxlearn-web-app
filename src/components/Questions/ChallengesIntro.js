import React from 'react';
import ExamDetails from './ExamDetails';

const ChallengesIntro = ({ variant, state }) => {
  switch (variant) {
    case 'challenge':
      return <ExamDetails state={state} />;
    case 'quest':
      return <ExamDetails />;
    default:
      return <ExamDetails />;
  }
};

export default ChallengesIntro;
