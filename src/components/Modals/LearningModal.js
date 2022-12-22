import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalLearningCard from '../Learn/ModalLearningCard';
import SidebarModal from '../Common/CustomModal/SidebarModal';

const LearningModal = (props) => {
  const { show, onHide } = props;
  return (
    <SidebarModal show={show} onHide={onHide} title='Continue your learning'>
      <div>
        <h4 className='modal__body-header'>Let's continue your journey (12)</h4>

        {/* <InfiniteScrollModal */}
        {/* // dataLength={upcomingChallengeDetail?.length}
      // next={upcomingChallenge}
      // hasMore={upcomingChallengeDetail?.length < upcomingCount}
      > */}
        {/* {upcomingChallengeDetail?.map((individualChallenge, index) => (
          <div
            className='col-12'
            key={`challenge0${index}`}
            onClick={() => {
              navigate({
                pathname: `/to-do/challenge/detail/${individualChallenge?._id}`,
                search: createSearchParams({
                  'challenge-type': `${individualChallenge?.challengeType}`,
                  exam_type: `UPCOMMING`,
                }).toString(),
              });
            }} */}
        {/* > */}
        <ModalLearningCard />
        {/* <QuestCard
            data={individualChallenge}
            status='YET-TO-START'
            type='challenges'
            challengeType='upcoming'
          /> */}
        {/* </div>
        ))} */}
        {/* </InfiniteScrollModal> */}
      </div>
    </SidebarModal>
    // <Modal
    //   show={show}
    //   onHide={onHide}
    //   backdrop='static'
    //   keyboard={false}
    //   className='ml-edit-user-details'
    //   dialogClassName='ml-edit-user-details__modal-dialog ml-modal-blur'
    //   contentClassName='ml-edit-user-details__modal-content'
    // >
    //   <Modal.Header closeButton className='ml-edit-user-details__modal-header'>
    //     <Modal.Title>Continue your learning</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body className='ml-edit-user-details__modal-body'>
    //     <div className='learning-modal-title'>
    //       Let's continue your journey (12)
    //     </div>
    //     <ModalLearningCard />
    //   </Modal.Body>
    // </Modal>
  );
};

export default LearningModal;
