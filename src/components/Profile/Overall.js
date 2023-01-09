import React from 'react';
import { useSelector } from 'react-redux';
import { ProfileDiamondIcon, StarsIcon, TargetIcon } from '../../assets';

const Overall = () => {
  const { score } = useSelector((state) => state.profile);
  return (
    <>
      <div className='overall-container'>
        <h4 className='overall__subheader'>Your overall achievements</h4>
        <div className='d-flex justify-content-between mt-3'>
          <div>
            <h1 className='overall__score'>{score}</h1>
            <p className='overall__score-txt'>Points</p>
          </div>
          <div>
            <ProfileDiamondIcon.default />
          </div>
        </div>
      </div>
      <div className='overlall-target-container'>
        <TargetIcon.default />
        <p className='your__achivement'>
          Your are <strong>on target</strong>. Keep going on!{' '}
        </p>
        <div className='stars'>
          <StarsIcon.default />
        </div>
      </div>
    </>
  );
};

export default Overall;
