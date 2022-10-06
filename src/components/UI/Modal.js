import React from 'react';

import { Fragment } from 'react';

import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  console.log(props);
  return <div className='backdrop1' onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className='modal1'>
      <div className='content'>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
