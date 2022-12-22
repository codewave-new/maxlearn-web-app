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
          <div className='container'>
            <div className='row'>
              <div className='col-xl-auto col-lg-auto col-sm-1 col-auto col-md-auto icon_column'>
                <div className='prev'>
                  {'<'}
                  {/* <img
                    src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670755725/Group_5_rcffqr.svg'
                    width='15px'
                    height='15px'
                  ></img> */}
                </div>
              </div>
              <div className='col-11 col-sm-10 col-lg-10 col-xl-11 col-md-10'>
                <LearnTopicsSlider />
              </div>
              <div className='col-xl-auto col-lg-auto col-sm-1 col-auto col-md-auto icon_column'>
                <div className='next'>
                  {'>'}
                  {/* <img
                    src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670755725/Group_5_rcffqr.svg'
                    width='15px'
                    height='15px'
                  ></img> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HotTopicsModal show={showTopicModal} onHide={closeModal} />
    </Fragment>
  );
};

export default Topics;
