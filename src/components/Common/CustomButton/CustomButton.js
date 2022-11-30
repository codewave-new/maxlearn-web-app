import React from 'react';

const CustomButton = ({ disabled, text,disabledText }) => {
  return (
    <div>
      <button
        className={disabled ? 'filled__disabled' : 'filled__custombutton'}
      >
        {disabled?disabledText:text}
      </button>
    </div>
  );
};

export default CustomButton;
