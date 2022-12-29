import React from 'react';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ title, id ,path}) => {
  const dummyData = [
    {
      path: '/learn',
      title: 'Learn',
      active: 'list_bread__key2',
      inActive: 'list_bread__key1',
    },
    {
      path: '/learn/category-list',
      title: 'Category listing',
      active: 'list_bread__key2',
      inActive: 'list_bread__key1',
    },
    {
      path: '/learn/detail',
      title: 'Category detail page',
      active: 'list_bread__key2',
      inActive: 'list_bread__key1',
    },
    {
      path: '/learn/subject-detail',
      title: 'Subject detail page',
      active: 'list_bread__key2',
      inActive: 'list_bread__key1',
    },
    {
      path: '/learn/topic-detail',
      title: 'Topic detail page',
      active: 'list_bread__key2',
      inActive: 'list_bread__key1',
    },
  ];

  return (
    <div className='list_bread'>
      <Breadcrumbs separator='|' aria-label='breadcrumb'>
        {dummyData.slice(0, id).map((val, i) => {
          return (
            <Link
              to={val.path}
              className={title === val.title ? val.active : val.inActive}
              key={i}
            >
              {val.title}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
  //   });
};

export default BreadCrumb;
