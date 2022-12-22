import React from 'react';
import CatergoryCard from './CatergoryCard';
import { data } from './data';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../Common/BreadCrumb/BreadCrumb';

const CategoryList = () => {
  return (
    <>
      <div className='container list_container'>
        <BreadCrumb title='Category listing' id={2} />
        <div className='row category_row'>
          <div className='category_row__heading'>Learn by categories</div>
          {data.map((element, i) => {
            return (
              <div
                className='col-12 col-md-6 col-lg-3  category_row__col'
                key={element.id}
              >
                <Link to='/learn/detail'>
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
