import React from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import { DetailCategory } from '../../components/Learn/Category/DetailCategory';

const CategoryDetail = () => {
  return (
    <>
      <div className='max__learn-wrapper'>
        <Header />
        <DetailCategory />

        <Footer />
      </div>
    </>
  );
};

export default CategoryDetail;
