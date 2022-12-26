import React from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import SubjectDetailCategory from '../../components/Learn/Category/SubjectDetailCategory';

const SubjectDetail = () => {
  return (
    <>
      <div className='max__learn-wrapper'>
        <Header />
        <SubjectDetailCategory />

        <Footer />
      </div>
    </>
  );
};

export default SubjectDetail;
