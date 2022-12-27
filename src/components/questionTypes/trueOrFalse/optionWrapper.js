import React from 'react'
import { renderText } from '../../../utility/helper'
import {unCheckedIcon} from '../../../assets';
import checkedIcon from '../../../assets/question/Group 6@3x.png';

export const OptionWrapper = ({options,
    isTrueOrFalse,
    handleSelect
}) => {
  return (
    options?.length?
    options?.map((item,index)=><div 
    className={`quest_check p-2 d-flex mb-4 ${isTrueOrFalse===''?'':(isTrueOrFalse===item?.value?'checked-background':'')} `}
    onClick={()=>handleSelect(item?.value)}
    >
    <div className='col-sm-1 d-flex justify-content-between '>
      {/* <input type='checkbox'
    checked={isTrueOrFalse===''?'':(isTrueOrFalse===item?.value?true:false)}
 /> */}
  {isTrueOrFalse===''?'':(isTrueOrFalse===item?.value?<img src={checkedIcon} style={{width:'20px',height:'20px'}}/>:<unCheckedIcon.default/>)}
    </div>
    <div className='col-sm-10  '>
      <label className='quest_options'>{item?.label}</label>
    </div>
  </div>)
        
:""  
       
       )
}
