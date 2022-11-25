import React from 'react';
import ExamDetails from './ExamDetails';

const QuestionDetail = ({ variant }) => {
  switch (variant) {
    case 'challenge':
      return <ExamDetails />;
    case 'quest':
      return <ExamDetails />;
    default:
      return <ExamDetails />;
  }
};

export default QuestionDetail;
