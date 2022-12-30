import React, { memo, useCallback, useEffect, useState } from 'react';
import CustomButton from '../Common/CustomButton/CustomButton';
import { Points, ExamDetailBackground, StartCertExam,CloseButton } from '../../assets';
import MembersAvatar from '../Common/Avatar/MembersAvatar';
import TeamDetailModal from '../Common/CustomModal/TeamDetailModal';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  challengesDetails,
  challengeStatus,
  startChallenge,
  getChallengeExamQuestions,
} from '../../services/challenges';
import {
  useLocation,
  useParams,
  createSearchParams,
  useSearchParams,
} from 'react-router-dom';
import { useQuery } from '../../utility/helper';
import ChallengeDetailSlider from '../UI/Slider/ChallengeDetailSlider';
import { WaitingLoader, ButtonLoader } from '../loader/loader';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import StartCertExamComponent from '../ToDo/questcerttab/StartCertExamComponent';

export const QuizDetailCard = ({name,description,ongoingChallenge,handleClick,isLoading,
  handleClose
}) => {
  let dum=[
    {
      fullName: "keerthi",
      profilePic: "https://maxlearn-admin-images.s3.amazonaws.com/Group+12%403x.png"
  },
  {
    fullName: "keerthi",
    profilePic: "https://maxlearn-admin-images.s3.amazonaws.com/Group+12%403x.png"
},
{
  fullName: "keerthi",
  profilePic: "https://maxlearn-admin-images.s3.amazonaws.com/Group+12%403x.png"
}
  ]
  return (
      <div className='detail__card-wrapper width-100'
      style={{
        backgroundImage: `url(${'https://res.cloudinary.com/dysdy7hjr/image/upload/v1671008842/Group_15_lrhzyk.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}

      >
          <div className='row detail__card-wrapper'>
             <div className=' col-sm-12 justify-content-center  mt-4'>
          <div
            className='d-flex justify-content-end '
            style={{ marginTop: '40px' }}
            onClick={handleClose}
          >
            {/* <a href='/to-do'> */}
            <button className='detail_close'>
              <CloseButton.default />
            </button>
            {/* </a> */}
          </div>
          </div>

            <div className='col-12 col-lg-6'>
              <div
                className='detail__card-wrapper-left'
                style={{
                  backgroundImage: `url(${ExamDetailBackground.default})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
              </div>
            </div>
            <div
              className={`col-12  col-lg-6 ${
                // query.exam_type === 'TODAYSTEST'
                //   ? 'detail__card-between'
                //   : 'detail__card-center'
               ' detail__card-between'
              }`}
            >
              <div>
              {dum?.length > 0 && (
                <div className='partcipation'>
                  <div className='partcipation__detail'>
                    <MembersAvatar
                      total={dum?.length}
                      max={3}
                      team={dum}
                    />
                    <p className='partcipation__detail-members mb-0'>
                      {dum?.length} people are taking this
                      challenge now!
                    </p>
                  </div>
                </div>
              )}

                <div className='detail__card__header mt-sm-5 mt-4'>
                  <h4 className='detail__card__header-heading mb-0'>
                    Hello {name},
                  </h4>
                </div>

                <div className='detail__card__body mt-3'>
                  <h3 className='detail__card__body-header'>
                  Become a Pro!
                  </h3>
                  {/* points */}
                  {description?.length?description?.map(item=>
                  <div className='detail__card__body-points mt-2'>
                    <div className='wrapper'>
                      <span>
                        <img
                          className='detail__card__body-points-img'
                          src={Points.default}
                        />
                      </span>
<p className='detail__card__body-points-key'>{item}</p>
                    </div>
                  </div>
                  ):''}
                </div>
              </div>

              <div className='button'>
                {/* <NavLink to='/start-challenge-exam/:id'> */}
                <CustomButton
                //   disabled={query.exam_type === 'TODAYSTEST' ? false : true}
                  disabledText={'Yet to start'}
                  text={
                    isLoading ? (
                      <ButtonLoader />
                    ) : (
                      'Quiz Me'
                    )
                  }
                  handleClick={handleClick}
                />
                {/* </NavLink> */}
              </div>
            </div>
          </div>
      </div>
  )
}
