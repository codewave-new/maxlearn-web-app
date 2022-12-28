import React from 'react';
import { TopperCrown } from '../../assets';

const RankingTop = () => {
  return (
    <div className='ranking__top-wrapper'>
      <div className='topper-container'>
        <div className='second-container '>
          <div className='container-color-bg'>
            <div className='icon-container-second'>
              <img
                src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_Bat_o6fzlt.svg'
                alt=''
              />
            </div>
          </div>
          <div className='topper-details'>
            <h6 className='topper__name'>dvgfhvfkkxkzxbck</h6>
            <p className='topper__points'>Points</p>
          </div>
        </div>
        <div className='first-container'>
          <div className='container-color-bg'>
            <div className='icon-container-first flex-column'>
              <img src={TopperCrown.default} alt='crown' />
              <img
                src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_Bat_o6fzlt.svg'
                alt=''
              />
            </div>
          </div>
          <div className='topper-details'>
            <h6 className='topper__name'>You</h6>
            <p className='topper__points'>Points</p>
          </div>
        </div>
        <div className='third-container'>
          <div className='container-color-bg'>
            <div className='icon-container-third'>
              <img
                src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665039794/Cute_Bat_o6fzlt.svg'
                alt=''
              />
            </div>
          </div>
          <div className='topper-details'>
            <h6 className='topper__name'>You</h6>
            <p className='topper__points'>Points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingTop;
