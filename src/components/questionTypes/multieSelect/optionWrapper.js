import React from 'react'
import { renderText } from '../../../utility/helper'
import {unCheckedIcon} from '../../../assets';
import checkedIcon from '../../../assets/question/Group 6@3x.png';

export const OptionWrapper = ({options,
    selectedOption,
    handleSelect
}) => {
  return (
    options?.length?
    options?.map((item,index)=><div className={`quest_check p-2 d-flex mb-4 ${selectedOption?.includes(index)?'checked-background':''} `}
    onClick={()=>handleSelect(index)}
    >
    <div className='col-sm-1 d-flex justify-content-between'>
      {/* <input type='checkbox'
    checked={selectedOption?.includes(index)?true:false}
 /> */}
 {selectedOption?.includes(index)?<img src={checkedIcon} style={{width:'20px',height:'20px'}}/>:<unCheckedIcon.default/>}
    </div>
    <div className='col-sm-10  '>
      <label className='quest_options'>{renderText(item?.text)}</label>
    </div>
  </div>)
        
:""  
       
       )
}
