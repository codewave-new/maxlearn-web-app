import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalTopicsCard from '../Learn/ModalTopicsCard';

const HotTopicsModal = (props) => {
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
        <Modal.Title>Hot topics for the day</Modal.Title>
      </Modal.Header>
      <Modal.Body className='ml-edit-user-details__modal-body'>
        <div className='learning-modal-title'>
          Let's learn through hottest topics (12)
        </div>
        <ModalTopicsCard />
      </Modal.Body>
    </Modal>
  );
};

export default HotTopicsModal;
