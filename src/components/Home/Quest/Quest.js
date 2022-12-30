import React from 'react';
import { useNavigate } from 'react-router-dom';
import SwiperQuestSlider from '../../UI/SwiperQuestSlider';

const Quest = (props) => {
  const navigate = useNavigate();
  console.log(props, '33');
  return (
    <section className='wax__home-quest-wrapper'>
      <div className='wax__home-quest-container'>
        <div className='d-flex justify-content-between '>
          <h5>Quest and Certs for you</h5>
          <a href=''>
            <h6
              onClick={() =>
                navigate({
                  pathname: '/to-do',
                  search: '?tab=quest',
                })
              }
            >
              {' '}
              View all
            </h6>
          </a>
        </div>
        <div className='wax__home-quest-slider-wrapper'>
          {/* <ChallengeSlider/> */}
          <SwiperQuestSlider data={props} />
        </div>
      </div>
    </section>
  );
};

export default Quest;
