import React from 'react';

const BasicInfo = () => {
  console.log('basicInfo');

  return (
    <div className='ml-pbi'>
      <div className='ml-pbi__user-details'>
        <h5 className=''>User details</h5>
      </div>
      <div className='ml-profile--basic-info__company-details'>
        <h5>Company details</h5>
      </div>
    </div>
  );
};

export default BasicInfo;
