import React from 'react';
import CatergoryCard from './CatergoryCard';
import { data } from './data';
import { Breadcrumbs } from '@mui/material';
import CategorySubjects from './CategorySubjects';
import { Link } from 'react-router-dom';

export const DetailCategory = () => {
  return (
    <>
      {data.slice(0, 1).map((element, i) => {
        return (
          <div className='container category_detail_wrapper' key={i}>
            <div className='list_bread'>
              <Breadcrumbs separator='|' aria-label='breadcrumb'>
                <Link to='/learn' className='list_bread__key1'>
                  Learn
                </Link>
                <Link to='/learn/category-list' className='list_bread__key1'>
                  Category listing
                </Link>
                <span className='list_bread__key2'>Category detail page</span>
              </Breadcrumbs>
            </div>
            <div className='row detail_row'>
              <div className='col-lg-3  col-12 detail_col1'>
                <CatergoryCard data={element} detail={true} />
              </div>
              <div className='col-lg-9  col-12 detail_col2'>
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
