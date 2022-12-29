import React from 'react';
import Modal from './Modal';
import { LogoutIcon } from '../../../assets';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAuth } from '../../../state/slices/loginSlice.';

const LogoutModal = ({ open, close }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeAuth());
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div>
      <Modal button={false} open={open} className='logout_modal'>
        <div className='logout_icon'>
          <LogoutIcon.default />
        </div>

        <div className='logout_header_name'>
          Are you sure you want to logout <br />
          from Maxlearn?
        </div>

        <div className='logout_button_wrapper'>
          <button className='outlined__button' onClick={handleLogout}>
            Yes
          </button>
          <button className='filled__button' onClick={close}>
            No
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LogoutModal;
