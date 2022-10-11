import React, { useState } from 'react';
import Modal from '../UI/Modal';
import SideBar from '../UI/SideBar/SideBar';
import ChallengeSlider from '../UI/Slider';
import SwiperSlider from '../UI/SwiperSlider';

const Challenges = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <section className='wax__home-challenges-wrapper'>
      <div className='d-flex wax__home-challenges-head justify-content-between'>
        <h5>Challenges for you </h5>
        <button onClick={props.onClickOpen}>View all</button>
      </div>
      <div className='wax__home-challenges-slider-wrapper'>
        {/* <ChallengeSlider/> */}
        <SwiperSlider />
      </div>
    </section>
  );
};

export default Challenges;
