import React from 'react';

const ProgressBar = ({ bgcolor, progress, height, marginTop }) => {
  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    marginTop: marginTop,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right',
  };

  const progresstext = {};

  return (
    <div className='d-flex align-items-center'>
      <div style={Parentdiv}>
        <div style={Childdiv}></div>
      </div>
      <div
        className='ps-2 progressbar__learn-text'
        style={progresstext}
      >{`${progress}%`}</div>
    </div>
  );
};

export default ProgressBar;
