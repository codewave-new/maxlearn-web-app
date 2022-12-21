import React, { useCallback, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfiniteScrollModal = ({ children, dataLength, next, hasMore }) => {
  const [tableContainerRef, setTableContainerRef] = useState();

  const onTableContainerRefChange = useCallback((node) => {
    if (node !== null) {
      setTableContainerRef(node);
    }
  }, []);
  return (
    <div
      className='modal__infintescroll-wrapper'
      ref={onTableContainerRefChange}
    >
      {tableContainerRef && (
        <InfiniteScroll
          dataLength={dataLength}
          next={next}
          initialLoad={false}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          useWindow={false}
          scrollableTarget={tableContainerRef}
        >
          {children}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default InfiniteScrollModal;
