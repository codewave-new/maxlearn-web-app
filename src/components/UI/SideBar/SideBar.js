import React from 'react';
import { useDispatch } from 'react-redux';
import { Close } from '../../../assets';
import { hideSideBar } from '../../../state/slices/uiSlice';
import ChallengesCard from '../../Challenges/ChallengesCard';
import Modal from '../Modal';

const SideBar = (props) => {
  const { ChallengesData } = props;
  const data = ChallengesData.map((el) => {
    return (
      <div className='row'>
        <div className='col-12  mb-1'>
          <ChallengesCard ChallengesData={el} />
        </div>
      </div>
    );
  });
  const challengesListItemNo = ChallengesData.length;
  return (
    <Modal onClose={props.onClose}>
      <div className='max__home-challenges-sidebar'>
        <div className='sidebar-head'>
          <h4>Challenges for you</h4>
          <Close.default onClick={props.onClose} />
        </div>
        <hr />
        <div className='sidebar-content'>
          <h5>
            Here is the challenges listed for you ({challengesListItemNo})
          </h5>
        </div>
      </div>
    </Modal>
  );
};

export default SideBar;
