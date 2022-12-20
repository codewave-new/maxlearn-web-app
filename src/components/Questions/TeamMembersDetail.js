import React from 'react';
import { Points } from '../../assets';

const TeamMembersDetail = ({member}) => {
  const {pointsEarned,fullName,profilePic}= member

  return (
    <div className={`member__wrapper`}>
      <div className='member-profile'>
        <img
          src={profilePic}
          className='member-profile-img'
        />{' '}
        {fullName}
      </div>
      {pointsEarned?<div className='member-points'>
        <span>
          <img className='member-points-img' src={Points.default} />
        </span>
        {pointsEarned} points
      </div>:<button className='nudge__button'>Nudge player</button>}
    </div>
  );
};

export default TeamMembersDetail;
