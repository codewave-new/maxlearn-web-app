import React from 'react';
import { useDispatch } from 'react-redux';
import { Close } from '../../../assets';
import { hideSideBar } from '../../../state/slices/uiSlice';
import ChallengesCard from '../../Challenges/ChallengesCard';
import Modal from '../Modal';

const SideBar = (props) => {
  const { data } = props;

  console.log(props.data);
  const dataChallenges = data.map((el) => {
    console.log(el);
    return (
      <div key={el.id} className='row'>
        <div className='col-12  mb-1'>
          <ChallengesCard
            challenger={el.challenger}
            opponent={el.opponent}
            time={el.time}
            expire={el.expire}
            data={el.data}
            challengerImg={el.challengerImg}
            opponentImg={el.opponentImg}
            discription={el.discription}
          />
        </div>
      </div>
    );
  });
  const challengesListItemNo = 6;
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
            {dataChallenges}
          </h5>
        </div>
      </div>
    </Modal>
  );
};

export default SideBar;
