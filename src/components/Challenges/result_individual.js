import React from 'react'
import {
    challengesCompletionBg,
    CloseButton,
    Gem,
    Points,
    PointsEarnedImage,
    Stars,
  } from '../../assets';
  import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
  import ChallengesAccoridan from '../../components/Common/CustomAccordian/ChallengesAccoridan';
  import TeamMembersDetail from '../../components/Questions/TeamMembersDetail';
import { Link, NavLink } from 'react-router-dom';
import CongratualtionsScreen from './CongratualtionsScreen';

export const ResultIndividual = ({
    individualResult,
    opponents,
    setSubmitCliked,
    submitCliked,
    leadingMemeber
}) => {
    const {pointsEarned,fullName,profilePic}= individualResult
  return (
    <>
    {!submitCliked?
    <div className='completion__wrapper'>
    <div
      className='completion__content'
      style={{
        backgroundImage: `url(${challengesCompletionBg.default})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='row content__padding'>
        <div className='col-5'>
          <div className='completion__content--note'>
            <h5 className='completion__content--welcomenote'>Hi {fullName},</h5>
            <p className='completion__content--thanknote'>
              Thank you for taking part in the challenge
            </p>
          </div>
          <div
            className='completion__points-earned'
            style={{
              backgroundImage: `url(${PointsEarnedImage.default})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            onClick={()=>setSubmitCliked(true)}
          >
            <div className='d-flex justify-content-between'>
              <div>
                <h4 className='completion__points--text'>
                  Congrats!! Great achievement
                </h4>
                <p className='completion__points--myscore'>You have earned</p>
                <strong className='completion__points--points'>{pointsEarned}</strong>
                <span className='completion__points--myscore'>Points</span>
              </div>
              <div>
                <Gem.default />
              </div>
            </div>

            <div className='completion__leading--info'>
              <img className='leading__team--logo' src={Points.default} />
              Hei.. team <strong>{leadingMemeber}</strong> are leading in this
              challenge
              <div className='leading__stars'>
                <Stars.default />
              </div>
              {/* <img className='leading__stars' src={Stars.default}/> */}
            </div>
          </div>
           <div className='report__alert'>
            <ErrorOutlineIcon />
            <p className='mb-0'>
              We will publish the challenge results once both squads have
              completed their challenges.
            </p>
          </div>
        </div>
        <div className='col-7 score__details__section'>
          <div className='score__card__wrapper'>
            <div className='score__card__header'>
              <h4 className='score__card-text'>Your score details</h4>
              <div className='accordian__wrapper'>
                <div className='accordian__team__detail'>
                  <div className='accordian__team__detail__logo'>
                    <img
                      className='accordian__team__logo--image'
                      src={profilePic}
                    />
                    {/* <CuteMonsters.default/> */}
                  </div>
                  <h4 className='accordian__team--name mb-0'>{fullName}</h4>
                </div>
                <div className='accordian__team__points__detail'>
                  <img
                    className='team__detail__points--image'
                    src={Points.default}
                  />
                  <h4 className='team__detail__points mb-0'>{pointsEarned} points</h4>
                </div>
              </div>
            </div>
            <div className='member__detail__score'>
              {opponents?.map((member) => (
                <TeamMembersDetail className='mb-22' member={member} />
              ))}
            </div>
          </div>
         
        </div>
      </div>
      <button className='completion__close-btn'>
        <CloseButton.default />
      </button>
      <div className='completion__footer '>
        <div className='d-flex justify-content-between align-items-center footer__wrapper'>
          <div>
          <Link to='#'>
            <button className='challenge__outline-btn '>View my leaderboard</button>
            </Link>           
            <Link to='/to-do'>
            <button className='challenge__filled-btn'>Explore challenges</button>
            </Link>           
          </div>
        </div>
      </div>
    </div>
  </div>:
  <CongratualtionsScreen
  close={()=>setSubmitCliked(false)}
  points={pointsEarned}
  name={fullName}
  />}
  </>
    )
}
