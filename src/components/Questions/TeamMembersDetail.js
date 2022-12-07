import React from 'react';
import { Points } from '../../assets';

const TeamMembersDetail = ({points,className}) => {
  return (
    <div className={`member__wrapper ${className}`}>
      <div className='member-profile'>
        <img
          src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg'
          className='member-profile-img'
        />{' '}
        Johnson Williams
      </div>
      {points?<div className='member-points'>
        <span>
          <img className='member-points-img' src={Points.default} />
        </span>
        40 points
      </div>:<button className='nudge__button'>Nudge player</button>}
    </div>
  );
};

export default TeamMembersDetail;
