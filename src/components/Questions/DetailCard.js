import React from 'react';

const DetailCard = () => {
  return (
    <div className='detail__card-wrapper'>
      <div className='row'>
        <div className='col-6'></div>
        <div className='col-6'>
          <div className='detail__card-content'>
            <div className='detail__card__header'>
              <h4 className='detail__card__header-heading'>
                Challenge in detail
              </h4>
              <p className='detail__card__header-duration'>
                10 More days to go
              </p>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus ers ametco uptatem
              accusantium doloremque laudant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
