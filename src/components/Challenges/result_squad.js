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
import CongratualtionsScreen from './CongratualtionsScreen';
import { Link, NavLink } from 'react-router-dom';

export const ResultSquad = ({
  individualResult,
  resultDetails,
  member,
  opponentSquads,
  setSubmitCliked,
  submitCliked
}) => {

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
            <h5 className='completion__content--welcomenote'>Hi {member?.fullName},</h5>
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
            <div className='d-flex justify-content-between' >
              <div>
                <h4 className='completion__points--text'>
                  Congrats!! Great achievement
                </h4>
                <p className='completion__points--myscore'>You have earned</p>
                <strong className='completion__points--points'>{member?.pointsEarned}</strong>
                <span className='completion__points--myscore'>Points</span>
              </div>
              <div>
                <Gem.default />
              </div>
            </div>

            <div className='completion__leading--info'>
              <img className='leading__team--logo' src={Points.default} />
              Hei.. team <strong>{individualResult?.name}</strong> are leading in this
              challenge
              <div className='leading__stars'>
                <Stars.default />
              </div>
              {/* <img className='leading__stars' src={Stars.default}/> */}
            </div>
          </div>
          <div>
            <h3 className='opponents__list'>Your opponents score details</h3>
            {opponentSquads?.map(squad=>
               <ChallengesAccoridan 
               squad={squad}
               />
              )}
           
            {/* <ChallengesAccoridan />
            <ChallengesAccoridan /> */}
          </div>
        </div>
        <div className='col-7 score__details__section'>
          <div className='score__card__wrapper'>
            <div className='score__card__header'>
              <h4 className='score__card-text'>Your squad’s score details</h4>
              <div className='accordian__wrapper'>
                <div className='accordian__team__detail'>
                  <div className='accordian__team__detail__logo'>
                    <img
                      className='accordian__team__logo--image'
                      src={individualResult?.imageUrl}
                    />
                    {/* <CuteMonsters.default/> */}
                  </div>
                  <h4 className='accordian__team--name mb-0'>{individualResult?.name}</h4>
                </div>
                <div className='accordian__team__points__detail'>
                  <img
                    className='team__detail__points--image'
                    src={Points.default}
                  />
                  <h4 className='team__detail__points mb-0'>{Math.floor(individualResult?.squadScore)} points</h4>
                </div>
              </div>
            </div>
            <div className='member__detail__score'>
            {individualResult?.learners?.map((mem) => (
                <TeamMembersDetail className='mb-22' member={mem} />
              ))}
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

  </div>
  :<CongratualtionsScreen
  close={()=>setSubmitCliked(false)}
  points={Math.floor(individualResult?.squadScore)}
  name={individualResult?.name}
  />}
  </>
    )
}
