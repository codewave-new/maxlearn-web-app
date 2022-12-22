import React from 'react';
import LearnCategorySlider from '../../UI/Slider/LearnCategorySlider';
import CatergoryCard from './CatergoryCard';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className='max-learn__category-wrapper'>
      <div className='d-flex justify-content-between category-content'>
        <h3>Learn by category</h3>
        <Link to='/learn/category-list'>
          <button>View all</button>
        </Link>
      </div>
      <div className='category-container'>
        <LearnCategorySlider />
      </div>
    </div>
  );
};

export default Category;
