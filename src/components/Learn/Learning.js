import React, { useState, Fragment } from 'react';
import LearningCard from './LearningCard';
import LearningModal from '../Modals/LearningModal';

function Learning() {
  const [showLearningModal, setShowLearningModal] = useState(false);

  const handleShowLearningModal = () => setShowLearningModal(true);
  const closeModal = () => setShowLearningModal(false);

  return (
    <Fragment>
      <div className='max-learn__learning-wrapper'>
        <div className='d-flex justify-content-between'>
          <h3>Continue your learning</h3>
          <button onClick={handleShowLearningModal}>View all</button>
        </div>
        <div className='row learning-card-row'>
          <div className='col-12 col-md-4'>
            <LearningCard />
          </div>
          <div className='col-12 col-md-4'>
            <LearningCard />
          </div>
          <div className='col-12 col-md-4'>
            <LearningCard />
          </div>
        </div>
        <div className='row learning-card-row'>
          <div className='col-12 col-md-4'>
            <LearningCard />
          </div>
          <div className='col-12 col-md-4'>
            <LearningCard />
          </div>
          <div className='col-12 col-md-4'>
            <LearningCard />
          </div>
        </div>
      </div>

      <LearningModal show={showLearningModal} onHide={closeModal} />
    </Fragment>
  );
}

export default Learning;
