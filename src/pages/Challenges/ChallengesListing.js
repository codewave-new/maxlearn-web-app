import React, { useCallback, useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import {
  todaysChallengesListing,
  upcomingChallenges,
} from '../../services/challenges/index';
import QuestCard from '../../components/Home/Quest/QuestCard';
import {
  CalenderIcon,
  Close,
  RightArrow,
  ToDoCalendarIcon,
} from '../../assets';
import { Modal } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';

const ChallengesListing = () => {
  const navigate = useNavigate();
  const [todayChallenge, setTodayChallenge] = useState([]);
  const [count, setCount] = useState(0);
  const [upcomingChallengeDetail, setUpcomingChallengeDetail] = useState([]);
  const [upcomingCount, setUpcomingCount] = useState(0);
  const [upcomingPage, setUpcomingPage] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);
  const [tableContainerRef, setTableContainerRef] = useState();

  useEffect(() => {
    todaysChallenges();
    upcomingChallenge();
  }, []);

  console.log(upcomingChallengeDetail, upcomingCount);

  const onTableContainerRefChange = useCallback((node) => {
    if (node !== null) {
      setTableContainerRef(node);
    }
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

  const upcomingChallenge = async () => {
    console.log('hitting');
    setUpcomingPage((pre) => pre + 1);
    const response = await upcomingChallenges(upcomingPage + 1);
    if (response?.statusCode === 200) {
      setUpcomingChallengeDetail((pre) => [
        ...pre,
        ...response?.data?.[0]?.response,
      ]);
      setUpcomingCount(response?.data?.[0]?.countInfo?.[0]?.count);
    } else {
      // alert(response);
    }
  };

  const handleModalOpen = async () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <div>
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
            }}
          >
            <QuestCard
              data={individualChallenge}
              type='challenges'
              className={'max__activity-quest-card'}
            />
          </div>
        ))}
        <button className='upcomming__todo-btn ' onClick={handleModalOpen}>
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

      <Modal
        show={modalStatus}
        onHide={closeModal}
        backdrop='static'
        keyboard={false}
        className='ml-edit-user-details'
        dialogClassName='ml-edit-user-details__modal-dialog ml-modal-blur'
        contentClassName='ml-edit-user-details__modal-content'
      >
        <Modal.Header
          closeButton
          className='ml-edit-user-details__modal-header'
        >
          <Modal.Title>Upcoming challenges</Modal.Title>
        </Modal.Header>
        <Modal.Body className='ml-edit-user-details__modal-body'>
          <div className='sidebar-content'>
            <h5 className='modal__body-header'>
              You have {upcomingCount} upcoming challenges
            </h5>
            <div
              style={{
                height: 'calc(100vh - 200px)', // this works also
                overflow: 'auto',
              }}
              ref={onTableContainerRefChange}
            >
              {tableContainerRef && (
                <InfiniteScroll
                  dataLength={upcomingChallengeDetail?.length}
                  next={upcomingChallenge}
                  initialLoad={false}
                  hasMore={upcomingChallengeDetail?.length < upcomingCount}
                  loader={<h4>Loading...</h4>}
                  useWindow={false}
                  scrollableTarget={tableContainerRef}
                >
                  {upcomingChallengeDetail?.map(
                    (individualChallenge, index) => (
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
                        />
                      </div>
                    )
                  )}
                </InfiniteScroll>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChallengesListing;
