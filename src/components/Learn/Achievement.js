import React from 'react';
import { LearnDiamond } from '../../assets';

const Achievement = () => {
  return (
    <div className='max__learn-achieve-wrapper row padd-20'>
      <div className='achieve-wrapper'>
        <div className='col-7'>
          <h2>Great achievement Tessa!</h2>
          <h1>
            350
            <small className='ps-1'>Points</small>
          </h1>
        </div>
        <div className='col-5 d-flex align-items-center justify-content-center '>
          <LearnDiamond.default />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
