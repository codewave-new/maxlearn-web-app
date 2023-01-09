import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Points } from '../../assets';

const RankingPositionCard = (props) => {
  const { rankNo, userName, userLogo, points, className, animation, type } =
    props;
  return (
    <div className={`max__ranking-position-card `}>
      <div className={`row ${animation}`}>
        <div
          className={`col-2 col-lg-2 col-xl-1 rank-number d-flex align-items-center justify-content-center ${props.className}`}
        >
          <h3
            className={`mb-0 ${
              className ? 'ranking__topper' : 'rankings__other'
            }`}
          >
            {rankNo}
          </h3>
        </div>
        <div className='col-10 col-lg-10 col-xl-11 '>
          <div className='rank-details-wrapper'>
            <div className={`rank-details-container ${props.className}`}>
              <div className='user d-flex align-items-center'>
                {type === 'individual' ? (
                  <div className='individual__ranking'>
                    <img
                      className='individual__ranking-image'
                      src={userLogo}
                      alt=''
                    />
                  </div>
                ) : (
                  <div className='squad__ranking'>
                    <img
                      className='squad__ranking-image'
                      src={userLogo}
                      alt=''
                    />
                  </div>
                )}
                <h5 className='ps-2 ranking__learners-name'>{userName}</h5>
              </div>
              <div className='points d-flex align-items-center'>
                <h6
                  className={`${
                    className
                      ? 'ranking__points-topper'
                      : 'ranking__points-others'
                  }`}
                >
                  <img src={Points.default} className='rank__points-image' />
                  {points}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingPositionCard;
