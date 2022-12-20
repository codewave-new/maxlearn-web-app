import React from 'react';
import Modal from '../../UI/Modal';
import { useNavigate } from 'react-router';
import { CloseButton } from '../../../assets';
import { QuestionBodyImage } from '../../../assets';

const FlashCard = () => {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate('/learn/category-list/detail/subject-detail/topic-detail');
  };
  return (
    <div
      className='flash-card-wrapper'
      style={{
        backgroundImage: `url(${QuestionBodyImage.default})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='flash_card_row'>
        <div className='row'>
          <div className='col-6 col'>
            <img
              src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670755725/Group_5_rcffqr.svg'
              alt='no image'
            ></img>
          </div>
          <div className='col-6 col'>
            <h3>Apples</h3>
            <h5>Banana</h5>
          </div>
        </div>
      </div>

      <button className='close__button' onClick={handleCLick}>
        <CloseButton.default />
      </button>
    </div>
  );
};

export default FlashCard;
