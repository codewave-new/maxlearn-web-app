import React from 'react';

const CustomButton = ({ disabled, text,disabledText,handleClick }) => {
  return (
    <div>
      <button
        className={disabled ? 'filled__disabled' : 'filled__custombutton'}
        onClick={handleClick}
      >
        {disabled?disabledText:text}
      </button>
    </div>
  );
};

export default CustomButton;
