import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { todaysChallengesListing } from '../../api';
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
    const { status, data } = response;
    if (status === 200) {
      setTodayChallenge(data.response);
      setCount(data.countInfo.count);
    }
  };

  console.log(count, todayChallenge);
  return (
    <div className='row'>
      {challengesData?.map((val, index) => (
        <div
          className='col-6'
          key={`challenge0${index}`}
          onClick={() => {
            navigate(`/to-do/challenge/detail/1234`);
          }}
        >
          <QuestCard className={'max__activity-quest-card'} />
        </div>
      ))}
    </div>
  );
};

export default ChallengesListing;
