import React from 'react';
import ProgressBar from '../../UI/ProgressBar';
import { LearnCompliance } from '../../../assets';
import { CategorySubjectData } from './data';
import { Link } from 'react-router-dom';

const CategorySubjects = ({subjects}) => {
  return (
    <div className='row category_subject'>
      {subjects.map((el, i) => {
        return (
          <div className='col-12 col-md-6 category_subject__col' key={i}>
<Link  to={`/learn/subject-detail?subject=${el?._id}`}>
            <div className='category_subject__wrapper'>
              <div className='row pl-5'>
                <div className='col-md-auto col-sm-auto col-auto subject_icon'>
                  <img
                    src={el?.subjectIcon}
                    height='24px'
                    width='24px'
                  ></img>
                </div>
                <div className='col-md-auto col-sm-auto col-auto right_col_wrapper'>
                  <div className='topic_wrapper'>
                    <div className='topic_wrapper__total'>{el?.topicsCount} Topics</div>
                  </div>
                  <div className='topic_name'>{el?.title}</div>
                </div>
              </div>

              <ProgressBar
                bgcolor='#212121'
                progress={el?.progressPercent}
                height={6}
                className='mt-2 progressbar__learn-text-color'
                marginTop={20}
              />
            </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySubjects;
