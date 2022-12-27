import React from 'react'
import { renderText } from '../../../utility/helper'
import { correctIcon, wrongIcon } from '../../../assets';

export const OptionWrapperPreview = ({
  options,
  selectedOption,
  statusVal,
  questionType,
}) => {
  const arrayareEqual = (array1, array2) => {
    if (array1.length === array2.length) {
      return array1.every((element, index) => {
        if (element === array2[index]) {
          return true;
        }
        return false;
      });
    }
    return false;
  };
  return (
    <>
          <>
        <p>CORRECT ANSWER</p>
      {statusVal?.answerInfo?.solutionIndex?.map(item =>

        <div className='quest_check p-2 d-flex mb-4'>
          <div className='col-sm-10  '>
            <label className='quest_options'>{renderText(options?.[item]?.text)}</label>
          </div>
        </div>
      )}
        </>
      {
        !arrayareEqual(statusVal?.attemptedInfo?.solutionIndex, statusVal?.answerInfo?.solutionIndex) ?
          <>
            <p>YOUR ANSWER</p>
            {statusVal?.attemptedInfo?.solutionIndex?.map(item =>
              <div className='quest_check p-2 d-flex mb-4'
              >
                <div className='col-sm-10  '>
                  <label className='quest_options'>{renderText(options?.[item]?.text)}</label>
                </div>
              </div>
            )}
          </>
          : ''
      }
    </>
  )
}
