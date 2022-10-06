import React, { Fragment } from 'react';
import { HomeFlashBg } from '../../assets';

const ChallengesCard = (props) => {
  const { challengesData } = props;

  return (
    <Fragment>
      <div className='max-home_challenges__card-wrapper'>
        <div className='d-flex max-home_challenges__card-container'>
          {/* <img className='max-home-challenges-bg' src={HomeFlashBg.default} alt='' /> */}
          <div className='left_challenges-container'>
            <div className='left_challenge_icon-container'></div>
          </div>
          <div className='right_challenges-container'>
            <div className='right_challenge_icon-container'></div>
          </div>
        </div>
        <div>
          <div className='max-challenges-content-container'>
            <div className='time-details'>
              <div className='d-flex time-details-text justify-content-between'>
                <h6>5 hrs 6 min left</h6>
                <h5>
                  Expire in: <strong>4 </strong> <small>Days</small>
                </h5>
              </div>
              <h3>Lorem ipm sdiolouir sit amet cons ectuirl se!</h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ChallengesCard;
