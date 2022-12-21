import React from 'react';
import { Modal } from 'react-bootstrap';

const SidebarModal = ({ children, show, onHide, title, footer = false }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop='static'
      keyboard={false}
      className='sidebar__modal'
      dialogClassName='sidebar__modal__modal-dialog ml-modal-blur'
      contentClassName='sidebar__modal__modal-content'
    >
      <Modal.Header closeButton className='sidebar__modal__modal-header'>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='sidebar__modal__modal-body'>{children}</Modal.Body>
      {footer && (
        <Modal.Footer className='sidebar__modal__modal-footer'>
          <Button onClick={onHide}>Save Changes</Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default SidebarModal;
