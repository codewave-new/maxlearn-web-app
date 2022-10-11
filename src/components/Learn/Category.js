import React from 'react';
import LearnCategorySlider from '../UI/Slider/LearnCategorySlider';
import CatergoryCard from './CatergoryCard';

const Category = () => {
  return (
    <div className='max-learn__category-wrapper'>
      <div className='d-flex justify-content-between category-content'>
        <h3>Learn by category</h3>
        <button>View all</button>
      </div>
      <div className='category-container'>
        <LearnCategorySlider />
      </div>
    </div>
  );
};

export default Category;
