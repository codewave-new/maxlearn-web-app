import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import '../../../styles/questions/congratulation.scss';
import { CloseButton, CertTrophy, WhiteScoreDiamond } from '../../../assets';
import { fetchCertReport } from '../../../services/certs';

const Score = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const [background, setBackground] = useState('blue');
  const [certReport, setCertReport] = useState('');

  const handleClose = () => {
    navigate('/to-do?tab=quest');
  };

  const getCertReport = async (resultId) => {
    try {
      const resp = await fetchCertReport(resultId);
      if (resp.data.statusCode === 200) {
        const { data } = resp.data;
        setCertReport(data);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    if (state) {
      getCertReport(state.resultId);
    }
    return () => {};
  }, [state]);

  return (
    <div
      className='score'
      style={{
        backgroundImage: `url(${
          background === 'blue'
            ? 'https://res.cloudinary.com/dysdy7hjr/image/upload/v1671008842/Group_15_lrhzyk.png'
            : ''
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <div className='row'>
        <div className=' col-sm-12 justify-content-center  mt-4'>
          <div
            className='d-flex justify-content-end '
            style={{ marginTop: '40px' }}
          >
            {/* <a href='/to-do'> */}
            <button className='detail_close' onClick={handleClose}>
              <CloseButton.default />
            </button>
            {/* </a> */}
          </div>
          <div className='d-flex  justify-content-center   mt-3'>
            <img src={CertTrophy.default} className='cup_img' alt='' />
          </div>
          <div className='score_intro s pt-4'>
            Congratulations {state && state.userName ? state.userName : ''}
          </div>
          <div className='score_aware'>
            <WhiteScoreDiamond.default /> You are at Awareness level
          </div>
          <div className='row m-0 justify-content-center mt-2'>
            <div className='col-2 ml-score-points'>
              <h5 className='ml-score-txt-bg'>
                {certReport && certReport.correctAnswers
                  ? certReport.correctAnswers
                  : 0}{' '}
                <span className='ml-score-txt-md'>of</span>{' '}
                {certReport && certReport.attemptedQuestions
                  ? certReport.attemptedQuestions
                  : 0}
              </h5>
              <h5 className='ml-score-txt'>Correct</h5>
            </div>
            <div className='col-2'>
              <h5 className='ml-score-txt-bg'>
                {certReport && certReport.pointsEarned
                  ? certReport.pointsEarned
                  : 0}
              </h5>
              <h5 className='ml-score-txt'>Earned points</h5>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-4 '>
            <Link to='/to-do?tab=quest'>
              <Button className='explore_challenge'>Continue learning</Button>
            </Link>
          </div>
          <div className='d-flex justify-content-center mt-3 '>
            <Button className='view_leaderboard'>View my leaderboard</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
