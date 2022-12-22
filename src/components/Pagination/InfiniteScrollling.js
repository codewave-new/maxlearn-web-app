import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfiniteScrollling = ({ children, dataLength, next, hasMore }) => {
  return (
    <div>
      <InfiniteScroll
        dataLength={dataLength}
        next={next}
        initialLoad={false}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {children}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollling;
