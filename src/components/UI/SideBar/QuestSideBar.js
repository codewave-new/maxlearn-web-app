import React from 'react';
import Modal from '../Modal';
import { Close } from '../../../assets';
import QuestCard from '../../Home/Quest/QuestCard';

const QuestSideBar = (props) => {
  const { data } = props;
  const dataQuest = data.map((el) => {
    console.log(el);
    return (
      <div key={el.id} className='row'>
        <div className='col-12  mb-1'>
          <QuestCard
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
  console.log(dataQuest);
  return (
    <Modal onClose={props.onClose}>
      <div className='max__home-challenges-sidebar'>
        <div className='sidebar-head'>
          <h4>Quest and Certs for you</h4>
          <Close.default onClick={props.onClose} />
        </div>
        <hr />
        <div className='sidebar-content'>
          <h5>Let’s explore all Quets & Certs (12)</h5>
          {dataQuest}
        </div>
      </div>
    </Modal>
  );
};

export default QuestSideBar;
