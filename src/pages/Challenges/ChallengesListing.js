import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { todaysChallengesListing } from '../../services/challenges/index';
import QuestCard from '../../components/Home/Quest/QuestCard';
import GroupAvatars from '../../components/UI/GroupAvatars';

const challengesData = [
  {
    date: '10/30/2022 to 11/20/2022',
    expiring: '4',
    title: ' Compliance monitoring and technical area reporting and testing!',
    chips: ['In progress', 'quest'],
    groupImg: <GroupAvatars />,
  },
  {
    date: '10/30/2022 to 11/20/2022',
    expiring: '4',
    title: ' Compliance monitoring and technical area reporting and testing!',
    chips: ['In progress', 'quest'],
    groupImg: <GroupAvatars />,
  },
  {
    date: '10/30/2022 to 11/20/2022',
    expiring: '4',
    title: ' Compliance monitoring and technical area reporting and testing!',
    chips: ['In progress', 'quest'],
    groupImg: <GroupAvatars />,
  },
];

const ChallengesListing = () => {
  const navigate = useNavigate();
  const [todayChallenge, setTodayChallenge] = useState([]);
  const [count, setCount] = useState(0);

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

  console.log(count, todayChallenge);
  return (
    <div className='row'>
      {todayChallenge?.map((individualChallenge, index) => (
        <div
          className='col-6'
          key={`challenge0${index}`}
          onClick={() => {
            navigate(`/to-do/challenge/detail/1234`);
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
  );
};

export default ChallengesListing;
