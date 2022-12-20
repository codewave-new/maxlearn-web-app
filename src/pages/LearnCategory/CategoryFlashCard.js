import React from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import FlashCard from '../../components/Learn/Category/FlashCard';

const CategoryFlashCard = () => {
  return (
    <>
      <div className='max__learn-wrapper'>
        <Header />
        <FlashCard />
      </div>
      <Footer />
    </>
  );
};

export default CategoryFlashCard;
