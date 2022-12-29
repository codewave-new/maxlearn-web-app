import React, { Fragment } from 'react';
import { LearnBadge } from '../../assets';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const DummyData = [
  {
    id: '1',
    title: 'Anti-money Laundering',
    level: 'Awareness level',
    percentage: '66',
  },
  {
    id: '2',
    title: 'Leadership and Learning',
    level: 'Explanatory level',
    percentage: '72',
  },
  {
    id: '3',
    title: 'Providing Exceptional Customer Service',
    level: 'Awareness level',
    percentage: '78',
  },
  {
    id: '4',
    title: 'Compliance monitor reportings and importance of proper testing!',
    level: 'Explanatory level',
    percentage: '65',
  },
];

const ModalLearningCard = ({continueLists}) => {
  return (
    <Fragment>
      <div className='learning_modal_card_wrapper'>
        {continueLists?.length?continueLists.map((index) => {
          return (
            <div
              key={index._id}
              className='row learning_modal_card_wrapper__row'
            >
              <div className='col-12 d-flex justify-content-between'>
                <div className='learning_modal_card_wrapper__row__content'>
                  <div className='learning_modal_card_wrapper__row__content__title'>
                    {index?.topicInfo?.title}
                  </div>

                  <span className='learning_modal_card_wrapper__row__content__level'>
                    <LearnBadge.default /> You are at{' '}
                    <span className='learning_modal_card_wrapper__row__content__level1'>
                      {index.learningLevel}
                    </span>
                  </span>
                </div>
                <div className='learning_modal_card_wrapper__row__progress'>
                  <CircularProgressbar
                    value={index.progressPercent}
                    text={`${index.progressPercent}%`}
                    styles={buildStyles({
                      rotation: 0.85,
                      textSize: '20px',
                      textColor: '#212121',
                      trailColor: 'white',
                      pathColor: '#4C9A99',
                      strokeLinecap: 'butt',
                    })}
                  />
                </div>
              </div>
            </div>
          );
        }):''}
      </div>
    </Fragment>
  );
};

export default ModalLearningCard;
