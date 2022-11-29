import React from 'react';
import { ProfileDiamondIcon, StarsIcon, TargetIcon } from '../../assets';

const Overall = () => {
  return (
    <>
      <div className='overall-container'>
        <h4>Your overall achievements</h4>
        <div className='d-flex justify-content-between mt-3'>
          <div>
            <h1>1807</h1>
            <p>Points</p>
          </div>
          <div>
            <ProfileDiamondIcon.default />
          </div>
        </div>
      </div>
      <div className='overlall-target-container'>
        <TargetIcon.default/> 
        <p>Your are <strong>on target</strong>. Keep going on! </p>
        <div  className='stars'><StarsIcon.default/></div>
      </div>
    </>
  );
};

export default Overall;
