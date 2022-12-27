import React, { useState } from 'react';
import { CuteMonsters, Points } from '../../../assets';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TeamMembersDetail from '../../../components/Questions/TeamMembersDetail';

const ChallengesAccoridan = ({squad}) => {
  const [show, setShow] = useState(false);
  return (
    <div className='accordian opponent-accordian'>
      <div className='accordian__wrapper col-12'>
        <div className='accordian__team__detail col-7'>
          <div className='accordian__team__detail__logo'>
            <img
              className='accordian__team__logo--image'
              src={squad?.imageUrl}
            />
            {/* <CuteMonsters.default/> */}
          </div>
          <h4 className='accordian__team--name mb-0'>{squad?.name}</h4>
        </div>
        <div className='accordian__team__points__detail col-5'>
          <img className='team__detail__points--image' src={Points.default} />{' '}
          <h4 className='team__detail__points mb-0'>{Math.floor(squad?.squadScore)} points</h4>
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
        <div className='accordian_squad_member'>
         {squad?.learners?.map((mem) => (
          <TeamMembersDetail className='mb-22' member={mem} />
        ))}
        </div>

      )}
    </div>
  );
};

export default ChallengesAccoridan;
