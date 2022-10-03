import React from 'react';
import { BadgeBg, BadgeBgImg } from '../../../assets';
import Card from '../../UI/Card';

const Badge = () => {
  return (
    <div classname='w-100 max-home__badge-container h-100'>
      <img src={BadgeBgImg.default} alt='' />
    </div>
  );
};

export default Badge;
