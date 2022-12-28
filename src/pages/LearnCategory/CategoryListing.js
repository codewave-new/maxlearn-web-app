import React from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import CategoryList from '../../components/Learn/Category/CategoryList';

const CategoryListing = () => {
  return (
    <>
      <div className='max__learn-wrapper'>
        <Header />
        <CategoryList />

        <Footer />
      </div>
    </>
  );
};

export default CategoryListing;
