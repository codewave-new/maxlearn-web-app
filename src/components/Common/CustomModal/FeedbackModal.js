import React from 'react';
import Modal from './Modal';
import { ChatIcon } from '../../../assets';

const FeedbackModal = ({ open, close }) => {
  return (
    <div>
      <Modal open={open} close={close} className='feedback_modal'>
        <div className='feedback_header'>
          <div className='feedback_icon'>
            <ChatIcon.default />
          </div>
          <div className='feedback_name'> We'd love to hear from you!</div>
        </div>
        <div className='feedback_text_area'>
          <textarea placeholder='Please write your open questions, comments, issues, or anything else youd like us to know.'></textarea>
        </div>
        <div className='feedaback_submit_button'>
          <button>Submit feedback</button>
        </div>
      </Modal>
    </div>
  );
};

export default FeedbackModal;
