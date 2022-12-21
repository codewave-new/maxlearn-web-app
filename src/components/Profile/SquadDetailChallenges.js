import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { yourSquadChallenges } from '../../services/profile';
import QuestCard from '../Home/Quest/QuestCard';
import InfiniteScrollling from '../Pagination/InfiniteScrollling';

const SquadDetailChallenges = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [SquadChallenges, setSquadChallenges] = useState([]);
  const [count, setCount] = useState(0);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    challengesOfParticularSquad();
  }, []);

  const challengesOfParticularSquad = async () => {
    setPageNum((pageNum) => pageNum + 1);
    const response = await yourSquadChallenges(id, pageNum + 1);
    if (response?.statusCode === 200) {
      const filteredChallenges = response?.data?.filter(
        (challenges) => !challenges?.count
      );
      setSquadChallenges((previousChallenge) => [
        ...previousChallenge,
        ...filteredChallenges,
      ]);
      setCount(response?.data[response?.data?.length - 1]?.count);
    }
  };

  const handleNavigation = (individualChallenge) => {
    const startDate = moment(individualChallenge?.startDate).diff(
      moment(),
      'days'
    );
    const endDate = moment(individualChallenge?.endDate).diff(moment(), 'days');
    let examType = 'TODAYSTEST';
    startDate > 0
      ? (examType = 'UPCOMMING')
      : endDate < 0
      ? (examType = 'COMPLETED')
      : (examType = 'TODAYSTEST');

    if (examType === 'COMPLETED') {
      console.log('completed');
    } else {
      navigate({
        pathname: `/to-do/challenge/detail/${individualChallenge?._id}`,
        search: createSearchParams({
          'challenge-type': `${individualChallenge?.challengeType}`,
          exam_type: `${examType}`,
        }).toString(),
      });
    }
  };

  return (
    <div>
      <h2 className='squad_challenge-header'>
        Your squad has {count} challenges in the list
      </h2>

      <InfiniteScrollling
        dataLength={SquadChallenges?.length}
        next={challengesOfParticularSquad}
        hasMore={SquadChallenges?.length < count}
      >
        <div className='row'>
          {SquadChallenges?.map((individualChallenge, index) => (
            <div
              className='col-6'
              key={`challenge0${index}`}
              onClick={() => {
                handleNavigation(individualChallenge);
              }}
            >
              <QuestCard
                data={individualChallenge}
                type='challenges'
                status={individualChallenge?.challengeStatus}
                className={'max__activity-quest-card'}
                challengeType={
                  moment(individualChallenge?.startDate).diff(
                    moment(),
                    'days'
                  ) > 0
                    ? 'upcoming'
                    : ''
                }
              />
            </div>
          ))}
        </div>
      </InfiniteScrollling>
    </div>
  );
};

export default SquadDetailChallenges;
