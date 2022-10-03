import React from 'react';
import { HomeAlertLogo } from '../../../assets';

const Quote = () => {
  return (
    <div className='max-home__quote-container p-3'>
      <div className='d-flex max-home__quote-content'>
        <HomeAlertLogo.default />
        <p>
          “Lorem ipsum dolor sit amet, consect etur adipiscing elitsesed do
          eiusmod tempor incididun lalbore et dolorema gna aliqua. Ut enim ad
          minim veniam Lsed do eiusmotelsed am.”
        </p>
      </div>
    </div>
  );
};

export default Quote;
