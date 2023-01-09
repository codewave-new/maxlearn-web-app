import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const WaitingLoader = () => (
  <Spinner
    // style={{
    //     position: 'fixed',
    //     top: '50%',
    //     left: '50%',
    //   }}
    animation='border'
    role='status'
    variant='warning'
  />
);

export const LoadingBar = () => {
  return <div className='loading'></div>;
};

export const CenterLoadingBar = () => {
  return (
    <div className='loading__wrapper'>
      <div className='loading'></div>
    </div>
  );
};

export const ButtonLoader = () => {
  return (
    <div className='loader__container'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {/* <span></span> */}
    </div>
  );
};

export const OutlineButtonLoader = () => {
  return (
    <div className='loader__orange'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {/* <span></span> */}
    </div>
  );
};
