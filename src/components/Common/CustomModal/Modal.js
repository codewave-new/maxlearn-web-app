import React from 'react';
import ReactDom from 'react-dom';
import { CloseButton } from '../../../assets';
import '../../../styles/common/modal/modal.scss';

const Modal = ({ children, open, close }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className='backdrop'>
        <div className='modal__wrapper'>{children}</div>
        <button className='close__button' onClick={close}>
          <CloseButton.default />
        </button>
      </div>
    </>,
    document.getElementById('overlays')
  );
};

export default Modal;
