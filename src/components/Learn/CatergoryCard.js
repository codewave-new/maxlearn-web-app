import React from 'react';
import { LearnCompliance } from '../../assets';
import Card from '../UI/Card';
// import { ProgressBar } from 'react-bootstrap';
import ProgressBar from '../UI/ProgressBar';
const percentage = 73;

const CatergoryCard = () => {
  return (
    <div className='max-learn__catergory-card'>
      <LearnCompliance.default />
      <h5 className='pt-3'>Compliance</h5>
      <p>10 Subjects</p>
      <div className='catergory-card-ova'></div>
      {/* <ProgressBar now={percentage} label={`${percentage}% completed`} /> */}
      <ProgressBar bgcolor='#212121' progress='30' height={7} />
    </div>
  );
};

export default CatergoryCard;
