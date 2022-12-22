import React from 'react';
import CatergoryCard from './CatergoryCard';
import { data } from './data';
import { Link } from 'react-router-dom';
import LearningCard from '../LearningCard';
import { SubjectData } from './data';
import BreadCrumb from '../../Common/BreadCrumb/BreadCrumb';

const SubjectDetailCategory = () => {
  return (
    <>
      <div className='container category_detail_wrapper'>
        <BreadCrumb title='Subject detail page' id={4} />
        <div className='row detail_row'>
          {data.slice(0, 1).map((element, i) => {
            return (
              <div
                className='col-xl-3 col-lg-4 col-12  detail_left_col'
                key={i}
              >
                <CatergoryCard data={element} detail={true} />
              </div>
            );
          })}

          <div className='col-xl-9 col-lg-8 col-12 detail_right_col'>
            <div className='subject_description'>
              Topics under Information security.. (20)
            </div>
            <Link to='/learn/topic-detail'>
              <div className='row'>
                {SubjectData.map((data, i) => {
                  return (
                    <div
                      className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-3'
                      key={i}
                    >
                      <LearningCard data={data} className='content-color' />
                    </div>
                  );
                })}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectDetailCategory;
