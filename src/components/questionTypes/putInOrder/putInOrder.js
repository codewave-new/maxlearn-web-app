


import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';

import { CardBody, Input } from 'reactstrap';
import { CheckBox } from '@mui/icons-material';
import quesImage from '../../../assets/Images/question/Rectangle-2.png';
import { renderText } from '../../../utility/helper';
import { OptionWrapper } from './OptionWrapper';

export const PutInOrder = ({
  questionInfo,
  attemptedQuestions,
  questionPerSession,
  setSelectedOption,
  selectedOption,
  setSubmitCliked,
  multi
}) => {
  const handleSelect = (array)=>{
let ress=array?.map(item=>item?.index)
console.log('ai',ress)
setSelectedOption([...ress])    
  };

  return (
    <Row className='question_card d-flex  col-sm-12'>
      <Col className='col-sm-6 mt-4 mb-4 ml-2 question_detail '>
        <div className='p-1'>
          <div className=''>
            Question - {attemptedQuestions+1} OF {questionPerSession}</div>
            <p className='mt-1'>
          PUT IN ORDER QUESTION
          </p>
          <p className='mt-1'>
            {renderText(questionInfo?.body)}
          </p>
          <img className='quest_image mt-1' src={quesImage} />
        </div>
      </Col>
      <Col className='col-sm-5 mt-4 mr-1 mb-4'>
        <div className='mt-2 quest_ans'> SELECT YOUR ANSWER</div>
        <CardBody className='mt-3 ml-2'>
          <OptionWrapper
options={questionInfo?.options}
selectedOption={selectedOption}
handleSelect={handleSelect}
/>
</CardBody>      
  <div className='app_subtn'>
    <a >
      <Button className='add-new-btn add_btnctprev' color='primary' 
      disabled={selectedOption?.length?false:true}
      onClick={()=>setSubmitCliked(true)}>
        {(selectedOption?.length?'Submit answer':"Next question")}
      </Button>
    </a>
  </div>
      </Col>
    </Row>
  )
}
