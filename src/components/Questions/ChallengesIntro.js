import React from 'react';
import ExamDetails from './ExamDetails';

const ChallengesIntro = ({ variant }) => {
  switch (variant) {
    case 'challenge':
      return <ExamDetails />;
    case 'quest':
      return <ExamDetails />;
    default:
      return <ExamDetails />;
  }
};

export default ChallengesIntro;
