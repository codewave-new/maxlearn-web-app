import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';

// const percentage = 66;

const LearningCard = ({ data, className }) => {
  return (
    <Link  to={`/learn/topic-detail?topic=${data?._id}`}>
    <div className='max-learn__learning-card d-flex'>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <CircularProgressbar
              value={data?.progressPercent}
              text={`${data?.progressPercent}%`}
              styles={buildStyles({
                rotation: 0.85,
                textSize: '20px',
                textColor: '#212121',
                pathColor: '#389F9E',
                strokeLinecap: 'butt',
              })}
            />
          </div>
          <div className='col-10'>
            <div className={`${className}`}>
              <p>
                Level - <strong>{data?.learningLevel}</strong>
              </p>
              <h5>{data?.topicInfo?.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default LearningCard;
