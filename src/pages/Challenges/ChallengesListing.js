import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuestCard from '../../components/Home/Quest/QuestCard';
import GroupAvatars from '../../components/UI/GroupAvatars';

const challengesData = [
    {
      date: '10/30/2022 to 11/20/2022',
      expiring: '4',
      title: ' Compliance monitoring and technical area reporting and testing!',
      chips:['In progress','quest'],
      groupImg:<GroupAvatars />
    },
    {
      date: '10/30/2022 to 11/20/2022',
      expiring: '4',
      title: ' Compliance monitoring and technical area reporting and testing!',
      chips:['In progress','quest'],
      groupImg:<GroupAvatars />
    },{
      date: '10/30/2022 to 11/20/2022',
      expiring: '4',
      title: ' Compliance monitoring and technical area reporting and testing!',
      chips:['In progress','quest'],
      groupImg:<GroupAvatars />
    },
  ];

const ChallengesListing = () => {
    const navigate=useNavigate()
  return (
    <div className='row'>
      {challengesData?.map((val,index) => (
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
