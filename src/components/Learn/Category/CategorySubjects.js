import React from 'react';
import ProgressBar from '../../UI/ProgressBar';
import { LearnCompliance } from '../../../assets';
import { CategorySubjectData } from './data';

const CategorySubjects = () => {
  return (
    <div className='row category_subject'>
      {CategorySubjectData.map((el, i) => {
        return (
          <div className='col-12 col-md-6 category_subject__col' key={i}>
            <div className='category_subject__wrapper'>
              <div className='row pl-5'>
                <div className='col-md-auto col-sm-auto col-auto subject_icon'>
                  <img
                    src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670755725/Group_5_rcffqr.svg'
                    height='24px'
                    width='24px'
                  ></img>
                </div>
                <div className='col-md-auto col-sm-auto col-auto right_col_wrapper'>
                  <div className='topic_wrapper'>
                    <div className='topic_wrapper__total'>{el.topic}</div>
                  </div>
                  <div className='topic_name'>{el.name}</div>
                </div>
              </div>

              <ProgressBar
                bgcolor='#212121'
                progress={el.percentage}
                height={6}
                className='mt-2 progressbar__learn-text-color'
                marginTop={20}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySubjects;
