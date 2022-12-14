import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalLearningCard from '../Learn/ModalLearningCard';

const LearningModal = (props) => {
  const { show, onHide } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop='static'
      keyboard={false}
      className='ml-edit-user-details'
      dialogClassName='ml-edit-user-details__modal-dialog ml-modal-blur'
      contentClassName='ml-edit-user-details__modal-content'
    >
      <Modal.Header closeButton className='ml-edit-user-details__modal-header'>
        <Modal.Title>Continue your learning</Modal.Title>
      </Modal.Header>
      <Modal.Body className='ml-edit-user-details__modal-body'>
        <div className='learning-modal-title'>
          Let's continue your journey (12)
        </div>
        <ModalLearningCard />
      </Modal.Body>
    </Modal>
  );
};

export default LearningModal;
