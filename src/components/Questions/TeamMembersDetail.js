import React from 'react';
import { Points } from '../../assets';

const TeamMembersDetail = ({ points, className, memberDetail }) => {
  return (
    <div className={`member__wrapper ${className}`}>
      <div className='member-profile'>
        <img src={memberDetail?.profilePic} className='member-profile-img' />{' '}
        {memberDetail?.fullName}
      </div>
      {points ? (
        <div className='member-points'>
          <span>
            <img className='member-points-img' src={Points.default} />
          </span>
          {memberDetail?.pointsEarned} points
        </div>
      ) : (
        <button className='nudge__button'>Nudge player</button>
      )}
    </div>
  );
};

export default TeamMembersDetail;
