import React, { useState } from 'react';
import CustomButton from '../Common/CustomButton/CustomButton';
import { Points, ExamDetailBackground, CuteMonsters } from '../../assets';
import MembersAvatar from '../Common/Avatar/MembersAvatar';
import QuestionCard, {
  DetailComponent,
  ThumNailComponent,
} from '../Common/QuestionCard.js/QuestionCard';
import TeamDetailModal from '../Common/CustomModal/TeamDetailModal';
import { NavLink } from 'react-router-dom';

const DetailCard = ({ start }) => {
  const [modalStatus, setModalStatus] = useState(true);
  return (
    <div>
      <div className='detail__card-wrapper'>
        <div className='row'>
          <div className='col-6'>
            <div
              className='detail__card-wrapper-left'
              style={{
                backgroundImage: `url(${ExamDetailBackground.default})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              {/* <img src={ExamDetailBackground.default} /> */}
              <div className='team__info__image-des'>
                <div className='text-center'>
                  <div className='team__info--image team__info--our-team'>
                    <CuteMonsters.default />
                  </div>
                  <p className='team__info--name'>Roasters</p>
                  <div className='team__info__member-wrapper'>
                    <MembersAvatar
                      total={21}
                      max={4}
                      team={[1, 2, 3, 4, 5, 5, 5, 5]}
                    />
                  </div>
                  <div className='team__info__points-wrapper'>
                    <p className='mb-0 team__info__points-text'>
                      <img
                        className='team__info__points-img'
                        src={Points.default}
                      />
                      130 points
                    </p>
                  </div>
                </div>
                <div className='text-center'>
                  <div className='team__info--image team__info--opponent-team'>
                    <CuteMonsters.default />
                  </div>
                  <p className='team__info--name'>Roasters</p>

                  <div className='team__info__member-wrapper'>
                    <MembersAvatar
                      total={21}
                      max={4}
                      team={[1, 2, 3, 4, 5, 5, 5, 5]}
                    />
                  </div>
                  <div className='team__info__points-wrapper'>
                    <p className='mb-0 team__info__points-text'>
                      <img
                        className='team__info__points-img'
                        src={Points.default}
                      />
                      130 points
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-6 ${
              start ? 'detail__card-between' : 'detail__card-center'
            }`}
          >
            <div>
              <div className='detail__card__header'>
                <h4 className='detail__card__header-heading mb-0'>
                  Challenge in detail
                </h4>
                <p className='detail__card__header-duration mb-0'>
                  10 More days to go to
                </p>
              </div>

              <div className='detail__card__body'>
                <h3 className='detail__card__body-header'>
                  Sed ut perspiciatis unde omn sed amets natus error sit
                  voluptat!
                </h3>
                {/* points */}
                <div className='detail__card__body-points'>
                  {[1, 2, 2]?.map((value) => (
                    <div className='wrapper'>
                      <span>
                        <img
                          className='detail__card__body-points-img'
                          src={Points.default}
                        />
                      </span>
                      <p className='detail__card__body-points-key'>
                        Sed ut perspiciatis unde omnis iste natus ers ametco
                        uptatem accusantium doloremque laudant.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {start && (
              <div className='partcipation'>
                <div className='partcipation__detail'>
                  <MembersAvatar
                    total={21}
                    max={3}
                    team={[1, 2, 3, 4, 5, 5, 5, 5]}
                  />
                  <p className='partcipation__detail-members mb-0'>
                    5 people are taking this challenge now!
                  </p>
                </div>
              </div>
            )}
            <div className='button'>
              <NavLink to='/challenge_question/:id'>
                <CustomButton
                  disabled={!start}
                  disabledText={'Yet to start'}
                  text={'Start Challenge'}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <TeamDetailModal
        modalStatus={modalStatus}
        handleClose={() => setModalStatus(false)}
      />
    </div>
  );
};

export default DetailCard;
