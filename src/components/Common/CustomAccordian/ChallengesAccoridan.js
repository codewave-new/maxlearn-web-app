import React, { useState } from 'react';
import { CuteMonsters, Points } from '../../../assets';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ChallengesAccoridan = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='accordian'>
      <div className='accordian__wrapper'>
        <div className='accordian__team__detail'>
          <div className='accordian__team__detail__logo'>
            <img
              className='accordian__team__logo--image'
              src={Points.default}
            />
            {/* <CuteMonsters.default/> */}
          </div>
          <h4 className='accordian__team--name mb-0'>Monsters</h4>
        </div>
        <div className='accordian__team__points__detail'>
          <img className='team__detail__points--image' src={Points.default} />
          <h4 className='team__detail__points mb-0'>100 points</h4>
          <button
            className={`accordian__toggle-btn ${show ? 'open' : ''}`}
            onClick={() => {
              setShow(!show);
            }}
          >
            <KeyboardArrowDownIcon/>
          </button>
        </div>
      </div>
       {/* what need to shown inside the accordian */}
      {show && (
        <div>
          <hr />
          <h1>mohan</h1>
        </div>
      )}
    </div>
  );
};

export default ChallengesAccoridan;
