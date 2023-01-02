import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CenterLoadingBar } from '../loader/loader';
import Modal from '../UI/Modal';
import SideBar from '../UI/SideBar/SideBar';
import ChallengeSlider from '../UI/Slider';
import SwiperSlider from '../UI/SwiperSlider';
import ChallengesCard from './ChallengesCard';

const Challenges = (props) => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  // const [loader, setLoader] = useState(false);

  return (
    <section className='wax__home-challenges-wrapper'>
      <div className='d-flex wax__home-challenges-head justify-content-between'>
        <h5>Challenges for you </h5>
        <button
          onClick={() =>
            navigate({
              pathname: '/to-do',
            })
          }
        >
          View all
        </button>
      </div>
      <div className='wax__home-challenges-slider-wrapper'>
        {props.loader ? (
          <CenterLoadingBar />
        ) : (
          <SwiperSlider
            data={props.data}
            ChallengesData={props.ChallengesData}
          />
        )}
        {/* <ChallengeSlider/> */}
      </div>
    </section>
  );
};

export default Challenges;
