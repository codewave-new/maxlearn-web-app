import React from 'react';

const CustomButton = ({ disabled, text }) => {
  return (
    <div>
      <button
        className={disabled ? 'filled__disabled' : 'filled__custombutton'}
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
