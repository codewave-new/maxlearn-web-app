import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const percentage = 66;
const LearningCard = () => {
  return (
    <div className='max-learn__learning-card d-flex'>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 0.85,
          textSize: '20px',
          textColor: '#212121',
          pathColor: '#4C9A99',
          strokeLinecap: 'butt',
        })}
      />
      <div className='content'>
        <p>
          Level - <strong>Awareness</strong>
        </p>
        <h5 className='mt-1'>Anti-money Laundering</h5>
      </div>
    </div>
  );
};

export default LearningCard;
