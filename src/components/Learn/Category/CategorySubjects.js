import React from 'react';
import ProgressBar from '../../UI/ProgressBar';
import { LearnCompliance } from '../../../assets';
import { CategorySubjectData } from './data';

const CategorySubjects = () => {
  return (
    <div className='row category_subject'>
      {CategorySubjectData.map((el, i) => {
        return (
          <div className='col-12 col-md-6 category_subject__col'>
            <div className='category_subject__wrapper'>
              <div className='row'>
                <div className='col-md-auto col-sm-auto col-auto subject_icon'>
                  In
                </div>
                <div className='col-md-auto col-sm-auto col-auto'>
                  <div className='topic_wrapper'>
                    <div className='topic_wrapper__total'>
                      {el.topic} Topics
                    </div>
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
