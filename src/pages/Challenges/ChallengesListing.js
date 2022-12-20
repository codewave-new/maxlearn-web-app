import React, { useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import {
  todaysChallengesListing,
  upcomingChallenges,
} from '../../services/challenges/index';
import QuestCard from '../../components/Home/Quest/QuestCard';
import { CalenderIcon, RightArrow } from '../../assets';
import InfiniteScrollModal from '../../components/Pagination/InfiniteScrollModal';
import SidebarModal from '../../components/Common/CustomModal/SidebarModal';
import InfiniteScrollling from '../../components/Pagination/InfiniteScrollling';

const ChallengesListing = () => {
  const navigate = useNavigate();
  const [todayChallenge, setTodayChallenge] = useState([]);
  const [count, setCount] = useState(0);
  const [todayPageNum, setTodayPageNum] = useState(0);
  const [upcomingChallengeDetail, setUpcomingChallengeDetail] = useState([]);
  const [upcomingCount, setUpcomingCount] = useState(0);
  const [upcomingPage, setUpcomingPage] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    todaysChallenges();
  }, []);

  const todaysChallenges = async () => {
    setTodayPageNum((pageNum) => pageNum + 1);
    const response = await todaysChallengesListing(todayPageNum + 1);
    if (response?.statusCode === 200) {
      setTodayChallenge((challenges) => [
        ...challenges,
        ...response?.data?.[0]?.response,
      ]);
      setCount(response?.data?.[0]?.countInfo?.[0]?.count);
    } else {
      alert(response);
    }
  };

  const upcomingChallenge = async () => {
    setUpcomingPage((upcomingPage) => upcomingPage + 1);
    const response = await upcomingChallenges(upcomingPage + 1);
    if (response?.statusCode === 200) {
      setUpcomingChallengeDetail((upcomingChallenges) => [
        ...upcomingChallenges,
        ...response?.data?.[0]?.response,
      ]);
      setUpcomingCount(response?.data?.[0]?.countInfo?.[0]?.count);
    } else {
      alert(response);
    }
  };

  const handleModalOpen = async () => {
    setModalStatus(true);
    upcomingChallenge();
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <div>
      <InfiniteScrollling
        dataLength={todayChallenge?.length}
        next={todaysChallenges}
        hasMore={todayChallenge?.length < count}
      >
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
                    exam_type: 'TODAYSTEST',
                  }).toString(),
                });
              }}
            >
              <QuestCard
                data={individualChallenge}
                type='challenges'
                className={'max__activity-quest-card'}
              />
            </div>
          ))}
        </div>
      </InfiniteScrollling>

      <button className='upcomming__todo-btn w-100' onClick={handleModalOpen}>
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

      <SidebarModal
        show={modalStatus}
        onHide={closeModal}
        title='Upcoming challenges'
      >
        <div>
          <h4 className='modal__body-header'>
            You have {upcomingCount} upcoming challenges
          </h4>

          <InfiniteScrollModal
            dataLength={upcomingChallengeDetail?.length}
            next={upcomingChallenge}
            hasMore={upcomingChallengeDetail?.length < upcomingCount}
          >
            {upcomingChallengeDetail?.map((individualChallenge, index) => (
              <div
                className='col-12'
                key={`challenge0${index}`}
                onClick={() => {
                  navigate({
                    pathname: `/to-do/challenge/detail/${individualChallenge?._id}`,
                    search: createSearchParams({
                      'challenge-type': `${individualChallenge?.challengeType}`,
                      exam_type: `UPCOMMING`,
                    }).toString(),
                  });
                }}
              >
                <QuestCard
                  data={individualChallenge}
                  status='YET-TO-START'
                  type='challenges'
                  challengeType='upcoming'
                />
              </div>
            ))}
          </InfiniteScrollModal>
        </div>
      </SidebarModal>
    </div>
  );
};

export default ChallengesListing;
