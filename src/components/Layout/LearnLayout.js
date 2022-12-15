import React from 'react';
import Footer from '../Common/Footer/Footer';
import Achievement from '../Learn/Achievement';
import Category from '../Learn/Category/Category';
import Learning from '../Learn/Learning';
import Topics from '../Learn/Topics';

const LearnLayout = () => {
  return (
    <div className='container'>
      <div className='row margin-t'>
        <div className='col-12 col-md-4'>
          <Achievement />
        </div>
        <div className='col-12 col-md-8'>
          <Topics />
        </div>
      </div>
      <div className='row'>
        <Learning />
      </div>
      <div className='row'>
        <Category />
      </div>
    </div>
  );
};

export default LearnLayout;
