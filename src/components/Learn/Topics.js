import React, { useState, Fragment } from 'react';
import LearnTopicsSlider from '../UI/Slider/LearnTopicsSlider';
// import EditUserDetailsModal from '../Modals/EditUserDetailsModal';
import HotTopicsModal from '../Modals/HotTopicsModal';

const Topics = () => {
  const [showTopicModal, setShowTopicModal] = useState(false);

  const handleShowTopicModal = () => setShowTopicModal(true);
  const closeModal = () => setShowTopicModal(false);

  return (
    <Fragment>
      <div className='max-learn__topics-wrapper'>
        <div className='topics-head d-flex justify-content-between'>
          <h3>Hot topics for the day</h3>
          <button onClick={handleShowTopicModal}>View all</button>
        </div>
        <div className='silder-topics-container'>
          <LearnTopicsSlider />
        </div>
      </div>

      <HotTopicsModal show={showTopicModal} onHide={closeModal} />
    </Fragment>
  );
};

export default Topics;
