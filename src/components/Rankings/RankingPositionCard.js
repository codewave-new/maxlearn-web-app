import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Points } from '../../assets';

const RankingPositionCard = (props) => {
  const {rankNo,userName,points} = props;

  return (
    <div className={`max__ranking-position-card `}>
      <div className='row'>
        <div className={`col-3 col-lg-1 rank-number d-flex align-items-center justify-content-center ${props.className}`}>
          <h3> {rankNo}</h3>
        </div>
        <div className='col-9 col-lg-11 '>
          <div className='rank-details-wrapper'>
            <div className={`rank-details-container ${props.className}`}>
              <div className='user d-flex align-items-center'>
              <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt='Remy Sharp'
                    src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg'
                  />
                <h5 className='ps-2'>
                 
                  {userName}
                </h5>
              </div>
              <div className='points d-flex align-items-center'>
                <h6> <img src={Points.default} className='rank__points-image' /> {points}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingPositionCard;
