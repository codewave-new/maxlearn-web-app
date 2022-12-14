import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { yourSquadChallenges } from '../../services/profile';
import QuestCard from '../Home/Quest/QuestCard';

const SquadDetailChallenges = () => {
  const { id } = useParams();
  const [SquadChallenges, setSquadChallenges] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    challengesOfParticularSquad();
  }, []);

  const challengesOfParticularSquad = async () => {
    const response = await yourSquadChallenges(id);
    if (response?.statusCode === 200) {
      setSquadChallenges(response?.data);
      setCount(response?.data[response?.data?.length - 1]?.count);
    }
  };

  return (
    
    <div className='row'>
      {SquadChallenges?.slice(0, 10)?.map((individualChallenge, index) => (
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
            status={individualChallenge?.challengeStatus}
            className={'max__activity-quest-card'}
          />
        </div>
      ))}
    </div>
  );
};

export default SquadDetailChallenges;
