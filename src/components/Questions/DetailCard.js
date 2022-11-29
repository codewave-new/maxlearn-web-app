import React from 'react';
import CustomButton from '../Common/CustomButton/CustomButton';
import { Points, ExamDetailBackground } from '../../assets';

const DetailCard = () => {
  return (
    <div>
      <div style={{ textAlign: 'end' }}>mohan</div>
      <div className='detail__card-wrapper'>
        <div className='row'>
          <div className=' col-6'>
            <div
              className='detail__card-wrapper-left'
              style={{
                backgroundImage: `url(${ExamDetailBackground.default})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width:'100%'
              }}
            ></div>
          </div>
          <div className='col-6'>
            <div className='detail__card-content'>
              <div className='detail__card__header'>
                <h4 className='detail__card__header-heading'>
                  Challenge in detail
                </h4>
                <p className='detail__card__header-duration'>
                  10 More days to go to
                </p>
              </div>
              <div className='detail__card__body'>
                <h3 className='detail__card__body-header'>
                  Sed ut perspiciatis unde omn sed amets natus error sit
                  voluptat!
                </h3>
                <div className='detail__card__body-points'>
                  <div>
                    <span>
                      <img src={Points.default} />
                    </span>
                    <p className='detail__card__body-points-key'>
                      Sed ut perspiciatis unde omnis iste natus ers ametco
                      uptatem accusantium doloremque laudant.
                    </p>
                  </div>
                  <div>
                    <span>
                      <img src={Points.default} />
                    </span>
                    <p className='detail__card__body-points-key'>
                      Sed ut perspiciatis unde omnis iste natus ers ametco
                      uptatem accusantium doloremque laudant.
                    </p>
                  </div>
                  <div>
                    <span>
                      <img src={Points.default} />
                    </span>
                    <p className='detail__card__body-points-key'>
                      Sed ut perspiciatis unde omnis iste natus ers ametco
                      uptatem accusantium doloremque laudant.
                    </p>
                  </div>
                </div>
              </div>
              <div className='button'>
                <CustomButton disabled={true} text={'Yet to start'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
