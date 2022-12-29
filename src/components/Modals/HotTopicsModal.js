import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalTopicsCard from '../Learn/ModalTopicsCard';
import SidebarModal from '../Common/CustomModal/SidebarModal';
import InfiniteScrollling from '../Pagination/InfiniteScrollling';
import { CenterLoadingBar,LoadingBar } from '../loader/loader';

const HotTopicsModal = ({show,onHide,hotTopicLists,
  hotTopicLoading,
  hotTopicPage,
  setHotTopicPage,
  hotTopicTotalCount
}) => {
  return (
    <SidebarModal show={show} onHide={onHide} title='Hot topics for the day'>
      <div>
        <h4 className='modal__body-header'>
          Let's learn through hottest topics (12)
        </h4>

        {hotTopicLoading && hotTopicPage === 1 ? (
        <CenterLoadingBar />
      ) : (
          <InfiniteScrollling
            dataLength={hotTopicLists?.length}
            next={()=>setHotTopicPage(hotTopicPage+1)}
            hasMore={hotTopicLists?.length < hotTopicTotalCount}
            loader={<LoadingBar />}
          > 
                 <ModalTopicsCard hotTopicLists={hotTopicLists}/>
                 </InfiniteScrollling>
      )}

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
