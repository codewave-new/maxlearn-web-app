import React from 'react';
import { BadgeBg, BadgeBgImg } from '../../../assets';
import Card from '../../UI/Card';

const Badge = () => {
  return (
    <div classname=' max-home__badge-container '>
      <img className='max-home__badge-img' src={BadgeBgImg.default} alt='' />
    </div>
  );
};

export default Badge;
