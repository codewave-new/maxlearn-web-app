import React from 'react'
import { renderText } from '../../../utility/helper'

export const OptionWrapper = ({options,
    selectedOption,
    handleSelect
}) => {
  return (
    options?.length?
    options?.map((item,index)=><div className='quest_check p-2 d-flex mb-4'
    onClick={()=>handleSelect(index)}
    >
        {console.log('selectedOption',selectedOption)}
    <div className='col-sm-1 d-flex justify-content-between '>
      <input type='checkbox'
    checked={selectedOption?.includes(index)?true:false}
 />
    </div>
    <div className='col-sm-10  '>
      <label className='quest_options'>{renderText(item?.text)}</label>
    </div>
  </div>)
        
:""  
       
       )
}
