import React from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import TopicCategoryDetail from '../../components/Learn/Category/TopicCategoryDetail';

const TopicDetail = () => {
  return (
    <>
      <div className='max__learn-wrapper'>
        <Header />
        <TopicCategoryDetail />
      </div>
      <Footer />
    </>
  );
};

export default TopicDetail;
