import React from 'react';
import { BadgeBg, BadgeBgImg, BadgeHome } from '../../../assets';
import Card from '../../UI/Card';

const Badge = () => {
  return (
    <div classname='max-home__badge-container'>
      <img className='max-home__badge-img' src={BadgeBgImg.default} alt='' />
      <div className='max-home__badge-content d-flex p-3'>
        <div className='badge-content-area'>
          <h6>Congrats Bartholomew!</h6>
          <h4>
            You have earned <strong>Einstein badge!</strong>{' '}
          </h4>
          <hr />
          <p>Sed ut perspiciatis unde omnis istenatus</p>
        </div>
        <div>
          <BadgeHome.default />
        </div>
      </div>
    </div>
  );
};

export default Badge;
