import React from 'react';
import CatergoryCard from './CatergoryCard';
import { data } from './data';
import BreadCrumb from '../../Common/BreadCrumb/BreadCrumb';
import CategorySubjects from './CategorySubjects';
import { Link } from 'react-router-dom';

export const DetailCategory = () => {
  return (
    <>
      {data.slice(0, 1).map((element, i) => {
        return (
          <div className='container category_detail_wrapper' key={i}>
            <BreadCrumb title='Category detail page' id={3} />
            <div className='row detail_row'>
              <div className='col-xl-3 col-lg-4 col-12 detail_left_col'>
                <CatergoryCard data={element} detail={true} />
              </div>
              <div className='ccol-xl-9 col-lg-8  col-12  detail_right_col'>
                <div className='subject_description'>
                  Subject under {element.name} (20)
                </div>
                <Link to='/learn/category-list/detail/subject-detail'>
                  <CategorySubjects />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
