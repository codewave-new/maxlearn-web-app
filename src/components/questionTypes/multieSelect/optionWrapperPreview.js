import React from 'react'
import { renderText } from '../../../utility/helper'
import { correctIcon ,wrongIcon} from '../../../assets';

export const OptionWrapperPreview = ({
  options,
    selectedOption,
    statusVal,
    questionType,
}) => {
 let intersection = statusVal?.answerInfo?.solutionIndex.filter(element => statusVal?.attemptedInfo?.solutionIndex.includes(element));
  return (
    options?.length?
    options?.map((item,index)=><div className={`quest_check p-2 d-flex mb-4 ${statusVal?.answerInfo?.solutionIndex?.includes(index)?"actual_answers":statusVal?.attemptedInfo?.solutionIndex?.includes(index)?'attempted_answers':''}`}
    >
    <div className='col-sm-10  '>
      <label className='quest_options'>{renderText(item?.text)}</label>
    </div>
    <div className='col-sm-1 d-flex justify-content-between '>
      {((statusVal?.answerInfo?.solutionIndex?.includes(index))&&(intersection?.includes(index)))?
      <correctIcon.default />:
      ((statusVal?.attemptedInfo?.solutionIndex?.includes(index)))? <wrongIcon.default />: ''
      }
    </div>
  </div>)
        
:""  
       
       )
}
