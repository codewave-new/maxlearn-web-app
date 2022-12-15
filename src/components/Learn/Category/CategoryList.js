import React from 'react';
import CatergoryCard from './CatergoryCard';
import { data } from './data';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';

const CategoryList = () => {
  return (
    <>
      <div className='container list_container'>
        <div className='list_bread'>
          <Breadcrumbs separator='|' aria-label='breadcrumb'>
            <Link to='/learn' className='list_bread__key1'>
              Learn
            </Link>
            <span className='list_bread__key2'>Category listing</span>
          </Breadcrumbs>
        </div>
        <div className='row category_row'>
          <div className='category_row__heading'>Learn by categories</div>
          {data.map((element, i) => {
            return (
              <div
                className='col-12 col-md-6 col-lg-3  category_row__col'
                key={element.id}
              >
                <Link to={`/learn/category-list/${element.id}`}>
                  <CatergoryCard data={element} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
