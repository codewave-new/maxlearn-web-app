import React from 'react';
import { BadgeBg, BadgeBgImg, BadgeHome, BadgeHomeLogo } from '../../../assets';
import Card from '../../UI/Card';

const Badge = () => {
  return (
    // <div className='max-home__badge-content d-flex p-3'>
    //   <div className='badge-content-area'>
    //     <h6>Congrats Bartholomew!</h6>
    //     <h4>
    //       You have earned <strong>Einstein badge!</strong>{' '}
    //     </h4>
    //     <hr />
    //     <p>Sed ut perspiciatis unde omnis istenatus</p>
    //   </div>
    //   <div>
    //     <BadgeHome.default />
    //   </div>
    // </div>
    <div className='max-home__badge-container d-flex'>
      <div className='badge-content-area'>
        <h6>Congrats Bartholomew!</h6>
        <h4>
          You have earned <strong>Einstein badge!</strong>{' '}
        </h4>
        <hr />
        <p>Sed ut perspiciatis unde omnis istenatus</p>
      </div>
      <div>
        {/* <img src={BadgeHomeLogo.default} alt="" /> */}
        <BadgeHome.default />
      </div>
    </div>
  );
};

export default Badge;
