import React from 'react';
import { Points } from '../../assets';

const TeamMembersDetail = ({member}) => {
  const {pointsEarned,fullName,profilePic}= member

  return (
    <div className={`member__wrapper col-12`}>
      <div className='member-profile col-9'>
        <img
          src={profilePic}
          className='member-profile-img'
        />{' '}
        <span>
        {fullName}
        </span>
      </div>
      {/* {pointsEarned? */}
      <div className='member-points col-3 d-flex justify-start'>
        <span>
          <img className='member-points-img' src={Points.default} />
        </span>
        <span className=''>
        {pointsEarned} points
        </span>
        </div>
      {/* </div>:<button className='nudge__button'>Nudge player</button>} */}
    </div>
  );
};

export default TeamMembersDetail;
