import React from 'react';

const ChallengesCard = (props) => {
  const {
    id,
    challenger,
    discription,
    opponent,
    time,
    expire,
    challengerImg,
    opponentImg,
  } = props;
  return (
    <div className='max-home_challenges__card-wrapper'>
      <div className='d-flex max-home_challenges__card-container'>
        {/* <img className='max-home-challenges-bg' src={HomeFlashBg.default} alt='' /> */}
        <div className='left_challenges-container'>
          <div className='left_challenge_icon-container'>
            <img src={challengerImg} alt='' />
          </div>
          <p>{challenger}</p>
        </div>
        <div className='right_challenges-container'>
          <div className='right_challenge_icon-container'>
            <img src={opponentImg} alt='' />
          </div>
          <p>{opponent}</p>
        </div>
      </div>
      <div>
        <div className='max-challenges-content-container'>
          <div className='time-details'>
            <div className='d-flex time-details-text justify-content-between'>
              <h6>5 hrs 6 min left</h6>
              <h5>
                Expire in: <strong>{expire} </strong> <small>Days</small>
              </h5>
            </div>
            <h3>{discription}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChallengesCard;
