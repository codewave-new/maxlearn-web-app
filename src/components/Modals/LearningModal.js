import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalLearningCard from '../Learn/ModalLearningCard';
import SidebarModal from '../Common/CustomModal/SidebarModal';
import InfiniteScrollling from '../Pagination/InfiniteScrollling';
import { CenterLoadingBar,LoadingBar } from '../loader/loader';

const LearningModal = ({
  onHide,
  show,
  continueLists,
  continueTotalCount,
  continueLearingLoading,
  setContinuePage,
  continuePage
}) => {
  return (
    <SidebarModal show={show} onHide={onHide} title='Continue your learning'>
      <div>
        <h4 className='modal__body-header'>Let's continue your journey (12)</h4>
        {continueLearingLoading && continuePage === 1 ? (
        <CenterLoadingBar />
      ) : (
          <InfiniteScrollling
            dataLength={continueLists?.length}
            next={()=>setContinuePage(continuePage+1)}
            hasMore={continueLists?.length < continueTotalCount}
            loader={<LoadingBar />}
          > 
                 <ModalLearningCard continueLists={continueLists}/>
                 </InfiniteScrollling>
      )}
      </div>
    </SidebarModal>
  );
};

export default LearningModal;
