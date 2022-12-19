import React from 'react';
import CatergoryCard from './CatergoryCard';
import { data } from './data';
import { Breadcrumbs } from '@mui/material';
import CategorySubjects from './CategorySubjects';
import { Link } from 'react-router-dom';
import LearningCard from '../LearningCard';
import { SubjectData } from './data';

const SubjectDetailCategory = () => {
  return (
    <>
      <div className='container category_detail_wrapper'>
        <div className='list_bread'>
          <Breadcrumbs separator='|' aria-label='breadcrumb'>
            <Link to='/learn' className='list_bread__key1'>
              Learn
            </Link>
            <Link to='/learn/category-list' className='list_bread__key1'>
              Category listing
            </Link>
            <Link to='/learn/category-list/detail' className='list_bread__key1'>
              Category detail page
            </Link>
            <span className='list_bread__key2'>Subject detail page</span>
          </Breadcrumbs>
        </div>
        <div className='row detail_row'>
          {data.slice(0, 1).map((element, i) => {
            return (
              <div className='col-lg-3  col-12 detail_col1' key={i}>
                <CatergoryCard data={element} detail={true} />
              </div>
            );
          })}

          <div className='col-lg-9  col-12 detail_col2'>
            <div className='subject_description'>
              Topics under Information security.. (20)
            </div>
            <Link to='/learn/category-list/detail/subject-detail'>
              <div className='row'>
                {SubjectData.map((data, i) => {
                  return (
                    <div className='col-lg-6 col-md-8 col-12 mb-3' key={i}>
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
