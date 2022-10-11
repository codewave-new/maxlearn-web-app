import React from 'react';
import Footer from '../components/Common/Footer/Footer';
import Header from '../components/Common/Header/Header';
import LearnLayout from '../components/Layout/LearnLayout';

const Learn = () => {
  return (
    <>
      <div className='max__learn-wrapper'>
        <Header />
        <LearnLayout />
      </div>
      <Footer />
    </>
  );
};

export default Learn;
