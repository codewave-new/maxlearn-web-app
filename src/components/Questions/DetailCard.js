import React from 'react';
import CustomButton from '../Common/CustomButton/CustomButton';
import { Points, ExamDetailBackground } from '../../assets';

const DetailCard = ({start}) => {
  
  return (
    <div>
      <div className='detail__card-wrapper'>
        <div className='row'>
          <div className='col-6'>
            <div className='detail__card-wrapper-left'>
              <img src={ExamDetailBackground.default} />
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
                  <div>
                    {[1, 2, 3, 3].map((val, i) => (
                      <>
                        {i < 3 ? (
                          <img
                            src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg'
                            className='partcipation__detail-img'
                          />
                        ) : (
                          ''
                        )}
                        {i === 3 ? (
                          <span className='partcipation__detail-total'>
                            +21
                          </span>
                        ) : (
                          ''
                        )}
                      </>
                    ))}
                  </div>
                  <p className='partcipation__detail-members mb-0'>
                    5 people are taking this challenge now!
                  </p>
                </div>
              </div>
            )}
            <div className='button'>
              <CustomButton
                disabled={!start}
                disabledText={'Yet to start'}
                text={'Start Challenge'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
