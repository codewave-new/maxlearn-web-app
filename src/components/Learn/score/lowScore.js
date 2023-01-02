import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CloseButton, WhiteScoreDiamond, LearnTrophy } from '../../../assets';
const LowScoreCard = ({score,name}) => {
    const {correctAnswers,learningLevel,pointsEarned,totalQuestions}=score
  const location = useLocation();
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/learn');
  };
  return (
    <div className='congratulation_card'>
      <div className='score_card_wrapper'>
        <div className='row'>
          <div className=' col-sm-12 justify-content-center  mt-4'>
            <button className='detail_close' onClick={handleClose}>
              <CloseButton.default />
            </button>
            <div className='d-flex  justify-content-center align-items-center score_heading   mt-3'>
              <div className='score_title'>
                Good start {name??''}! keep learning!
              </div>
              <img src={LearnTrophy.default} className='trophy_img' alt='' />
            </div>
            <div className='aware_level'>
              <WhiteScoreDiamond.default /> You are at{' '}
              <span>{learningLevel} level</span>
            </div>
            <div className='row m-0 justify-content-center mt-2'>
              <div className='col-2 ml-score-points'>
                <h5 className='learn-score-text'>
                  {correctAnswers}<span className='score-txt-md'>of</span> {totalQuestions}
                </h5>
                <h5 className='score-txt'>Correct</h5>
              </div>
              <div className='col-2'>
                <h5 className='learn-score-text'>{pointsEarned}</h5>
                <h5 className='score-txt'>Earned points</h5>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-4 '>
              <Link to='/learn'>
                <Button className='continue_exploring'>
                  Continue learning
                </Button>
              </Link>
            </div>
            <div className='d-flex justify-content-center mt-3 '>
              <Button className='view_leaderboard_learn'>
                View my leaderboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LowScoreCard;






