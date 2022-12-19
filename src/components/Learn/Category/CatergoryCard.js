import React from 'react';
import { LearnCompliance } from '../../../assets';
import ProgressBar from '../../UI/ProgressBar';

// const CatergoryCard = ({ index }) => {
//   return (
//     <>
//       <div className='max-learn__catergory-card'>
//         <LearnCompliance.default />
//         <h5 className='pt-3'>Compliance</h5>
//         <p>10 Subjects</p>
//         <div className='catergory-card-ova'></div>
//         {/* <ProgressBar now={percentage} label={`${percentage}% completed`} /> */}
//         <ProgressBar bgcolor='#212121' progress={30} height={7} />
//       </div>
//     </>
//   );
// };
const CatergoryCard = ({ data, detail }) => {
  return (
    <>
      <div
        className='max-learn__catergory-card'
        style={{ background: data.bgColor }}
      >
        <LearnCompliance.default />
        <h4 className='pt-3'>{data.name}</h4>
        <span className='max-learn__catergory-card__category_subject'>
          {data.subject} Subjects
        </span>
        <ProgressBar
          bgcolor='#212121'
          progress={data.percentage}
          height={6}
          className='mt-2 progressbar__learn-text'
          marginTop={20}
        />
        <div className='category_detail'>
          {detail === true ? data.detail : ''}
        </div>
      </div>
    </>
  );
};

export default CatergoryCard;
