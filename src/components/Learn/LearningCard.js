import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

// const percentage = 66;

const LearningCard = ({ data, className }) => {
  return (
    <div className='max-learn__learning-card d-flex'>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <CircularProgressbar
              value={data.percentage}
              text={`${data.percentage}%`}
              styles={buildStyles({
                rotation: 0.85,
                textSize: '20px',
                textColor: '#212121',
                pathColor: '#4C9A99',
                strokeLinecap: 'butt',
              })}
            />
          </div>
          <div className='col-10'>
            <div className={`${className}`}>
              <p>
                Level - <strong>{data.level}</strong>
              </p>
              <h5>{data.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
