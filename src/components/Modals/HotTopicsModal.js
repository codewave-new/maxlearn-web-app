import React, { useState } from 'react';
import ModalTopicsCard from '../Learn/ModalTopicsCard';
import SidebarModal from '../Common/CustomModal/SidebarModal';

const HotTopicsModal = (props) => {
  const { show, onHide } = props;
  return (
    <SidebarModal show={show} onHide={onHide} title='Hot topics for the day'>
      <div>
        <h4 className='modal__body-header'>
          Let's learn through hottest topics (12)
        </h4>

        {/* <InfiniteScrollModal */}
        {/* // dataLength={upcomingChallengeDetail?.length}
        // next={upcomingChallenge}
        // hasMore={upcomingChallengeDetail?.length < upcomingCount}
        > */}
        {/* {upcomingChallengeDetail?.map((individualChallenge, index) => (
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
              }} */}
        {/* > */}
        <ModalTopicsCard />
        {/* <QuestCard
              data={individualChallenge}
              status='YET-TO-START'
              type='challenges'
              challengeType='upcoming'
            /> */}
        {/* </div>
          ))} */}
        {/* </InfiniteScrollModal> */}
      </div>
    </SidebarModal>
  );
};

export default HotTopicsModal;
