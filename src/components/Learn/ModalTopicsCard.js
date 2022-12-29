import React from 'react';
import { Fragment } from 'react';
import { LearnBadge } from '../../assets';
import MembersAvatar from '../Common/Avatar/MembersAvatar';

const DummyData = [
  {
    id: '1',
    title: 'Providing Exceptional Customer Service',
    level: 'Awareness level',
    member: [
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299426/challenges_dtiuny.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
    ],
  },
  {
    id: '2',
    title: 'Compliance monitor reportings and importance of proper testing!',
    level: 'Explanatory level',
    member: [
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299426/challenges_dtiuny.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
    ],
  },
  {
    id: '3',
    title: 'Leadership and Learning',
    level: 'Awareness level',
    member: [
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299426/challenges_dtiuny.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
    ],
  },
  {
    id: '4',
    title: 'Compliance monitor reportings and importance of proper testing!',
    level: 'Explanatory level',
    member: [
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299426/challenges_dtiuny.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
      {
        profilePic:
          'https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299460/Group_47_in1yd2.svg',
      },
    ],
  },
];

const ModalTopicsCard = ({hotTopicLists}) => {
  return (
    <Fragment>
      <div className='topicsModalCard_wrapper'>
        {hotTopicLists?.length?hotTopicLists.map((data) => {
          return (
            <div key={data?._id} className='row topicsModalCard_wrapper__row'>
              <div className='col-12  mb-1'>
                <div className='topicsModalCard_wrapper__row__content'>
                  <div className='topicsModalCard_wrapper__row__content__title'>
                    {data?.topicInfo?.title}
                  </div>
                  <span className='topicsModalCard_wrapper__row__content__level'>
                    <LearnBadge.default /> You are at{' '}
                    <span className='topicsModalCard_wrapper__row__content__level1'>
                    {data?.learningLevel}
                    </span>
                  </span>
                  <span className='d-flex align-items-center topicsModalCard_wrapper__row__content__members'>
                    <MembersAvatar
                      total={data?.members?.length}
                      max={3}
                      team={data?.members}
                    />{' '}
                    <span className='topicsModalCard_wrapper__row__content__total'>
                      {data?.members?.length} people are learning this topic now
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        }):""}
      </div>
    </Fragment>
  );
};

export default ModalTopicsCard;
