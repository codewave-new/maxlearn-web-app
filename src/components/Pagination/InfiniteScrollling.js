import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfiniteScrollling = ({
  children,
  dataLength,
  next,
  hasMore,
  loader,
}) => {
  return (
    <div className='infinte_scroll-wrapper'>
      <InfiniteScroll
        dataLength={dataLength}
        next={next}
        initialLoad={false}
        hasMore={hasMore}
        loader={<div className='m-auto mt-1 mb-1'>{loader}</div>}
      >
        {children}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollling;
