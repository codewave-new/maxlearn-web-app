import React from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import FlashCard from '../../components/Learn/Category/FlashCard';
import { QuestionBodyImage } from '../../assets';

const CategoryFlashCard = () => {
  return (
    <>
      <div
        className='max__learn-wrapper'
        style={{
          backgroundImage: `url(${QuestionBodyImage.default})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Header />
        <FlashCard />

        <Footer />
      </div>
    </>
  );
};

export default CategoryFlashCard;
