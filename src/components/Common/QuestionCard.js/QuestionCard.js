import React from 'react';

export const ThumNailComponent = ({ children }) => {
  return <>{children}</>;
};

export const DetailComponent = ({ children }) => {
  return <>{children}</>;
};

const  QuestionCard = ({
  leftClassName = '',
  rightClassName = '',
  className = '',
  children,
}) => {
  return (
    <div className={`detail__card-wrapper ${className}`}>
      <div className='row'>
        <div className={`col-12 col-lg-6 ${leftClassName}`}>{children[0]}</div>
        <div className={`col-12 col-lg-6 pl-30 ${rightClassName}`}>{children[1]}</div>
      </div>
    </div>
  );
};

export default QuestionCard;
