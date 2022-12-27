import React from 'react'
import { renderText } from '../../../utility/helper'
import { correctIcon ,wrongIcon} from '../../../assets';

export const OptionWrapperPreview = ({options,
    isTrueOrFalse,
    handleSelect,
    statusVal,
    questionType
}) => {
  return (
    options?.length?
    options?.map((item,index)=><div className={`quest_check p-2 d-flex mb-4 ${statusVal?.answerInfo?.isTrueOrFalse?.toString()==item?.value?'actual_answers':statusVal?.attemptedInfo?.isTrueOrFalse===item?.value?'attempted_answers':''}`}
    // onClick={()=>handleSelect(item?.value)}
    >
    <div className='col-sm-10'>
      <label className='quest_options'>{item?.label}</label>
    </div>
    <div className={`col-sm-1 d-flex justify-content-between`}>
    {((statusVal?.answerInfo?.isTrueOrFalse?.toString()==item?.value)&&(statusVal?.answerInfo?.isTrueOrFalse?.toString()===statusVal?.attemptedInfo?.isTrueOrFalse))?
      <correctIcon.default />:
      (statusVal?.attemptedInfo?.isTrueOrFalse===item?.value)? <wrongIcon.default />: ''
      }
     </div>
  </div>)
        
:""  
       
       )
}
