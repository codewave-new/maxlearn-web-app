import React, { useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { todaysChallengesListing } from '../../services/challenges/index';
import QuestCard from '../../components/Home/Quest/QuestCard';
import {
  CalenderIcon,
  Close,
  RightArrow,
  ToDoCalendarIcon,
} from '../../assets';
import Modal from '../../components/UI/Modal';

const ChallengesListing = () => {
  const navigate = useNavigate();
  const [todayChallenge, setTodayChallenge] = useState([]);
  const [count, setCount] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    todaysChallenges();
  }, []);

  const todaysChallenges = async () => {
    const response = await todaysChallengesListing();
    if (response?.statusCode === 200) {
      setTodayChallenge(response?.data?.[0]?.response);
      setCount(response?.data?.[0]?.countInfo?.[0]?.count);
    } else {
      alert(response);
    }
  };

  const handleModalOpen = async () => {
    const response = await upcomingChallenges();
    // if()
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <>
      <div className='row'>
        {todayChallenge?.map((individualChallenge, index) => (
          <div
            className='col-6'
            key={`challenge0${index}`}
            onClick={() => {
              navigate({
                pathname: `/to-do/challenge/detail/${individualChallenge?._id}`,
                search: createSearchParams({
                  'challenge-type': `${individualChallenge?.challengeType}`,
                }).toString(),
              });
              // navigate(`/to-do/challenge/detail/${individualChallenge?._id}`);
            }}
          >
            <QuestCard
              data={individualChallenge}
              type='challenges'
              className={'max__activity-quest-card'}
            />
          </div>
        ))}
        <button className='upcomming__todo-btn' onClick={handleModalOpen}>
          <div>
            <CalenderIcon.default />
            <span className='upcomming__todo-text mb-0'>
              Get update on your upcoming challenges
            </span>
          </div>
          <div>
            <RightArrow.default />
          </div>
        </button>
      </div>

      {modalStatus && (
        <Modal onClose={closeModal}>
          <div className='max__home-challenges-sidebar'>
            <div className='sidebar-head'>
              <h4>Upcoming challenges</h4>
              <Close.default onClick={closeModal} />
            </div>
            <hr />
            <div className='sidebar-content'>
              <h5>You have {todayChallenge.length} upcoming challenges</h5>
              {todayChallenge?.map((individualChallenge, index) => (
                <div
                  className='col-12'
                  key={`challenge0${index}`}
                  onClick={() => {
                    navigate(`/to-do/challenge/detail/1234`);
                  }}
                >
                  <QuestCard
                    data={individualChallenge}
                    type='challenges'
                    // className={'max__activity-quest-card'}
                  />
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ChallengesListing;
