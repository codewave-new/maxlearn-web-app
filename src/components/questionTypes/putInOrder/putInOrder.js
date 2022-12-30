import React, { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { CardBody, Input } from 'reactstrap';
import { CheckBox } from '@mui/icons-material';
import quesImage from '../../../assets/Images/question/Rectangle-2.png';
import { renderText } from '../../../utility/helper';
import { OptionWrapper } from './optionWrapper';
import { OptionWrapperPreview } from '../putInOrder/optionWrapperPreview';

export const PutInOrder = ({
  questionInfo,
  attemptedQuestions,
  questionPerSession,
  setSelectedOption,
  selectedOption,
  setSubmitCliked,
  multi,
  isExplanation,
  getNextQuestion,
  statusVal,
  questionNo,
  totalQuestions,
  type,
}) => {
  const handleSelect = (array) => {
    let ress = array?.map((item) => item?.index);
    setSelectedOption([...ress]);
  };
  useEffect(() => {
    let ress = questionInfo?.options?.map((item) => item?.index);
    setSelectedOption([...ress]);
  }, []);

  return (
    <Row className='question_card d-flex  col-sm-12'>
      <Col className='col-sm-6 mt-4 mb-4 ml-2 question_detail '>
        <div className='p-1'>
          <div className=''>
            {type && type === 'cert'
              ? `Question - ${questionNo || 0} OF ${totalQuestions || 0}`
              : ` Question - 
              ${isExplanation ? attemptedQuestions : attemptedQuestions + 1} OF 
              ${questionPerSession}`}
            {/* Question -{' '}
            {isExplanation ? attemptedQuestions - 1 : attemptedQuestions + 1} OF{' '}
            {questionPerSession} */}
          </div>
          <p className='mt-1'>PUT IN ORDER QUESTION</p>
          <p className='mt-1'>{renderText(questionInfo?.body)}</p>
          {/* <img className='quest_image mt-1' src={quesImage} /> */}
        </div>
      </Col>
      <Col className='col-sm-5 mt-4 mr-1 mb-4'>
        <div className='mt-2 quest_ans'>
          {isExplanation ? 'YOUR ANSWER' : 'SELECT YOUR ANSWER'}{' '}
        </div>
        <CardBody className='mt-3 ml-2'>
          {isExplanation ? (
            <OptionWrapperPreview
              options={questionInfo?.options}
              selectedOption={selectedOption}
              statusVal={statusVal}
              questionType={questionInfo?.questionType}
            />
          ) : (
            <OptionWrapper
              options={questionInfo?.options}
              selectedOption={selectedOption}
              handleSelect={handleSelect}
            />
          )}
        </CardBody>
        {isExplanation?
        <CardBody className='mt-3 ml-2 explanation-details'>
           
            <>
              <h2 className='mt-1'>Answer explanation in detail</h2>
              <p>{statusVal?.answerInfo?.feedback}</p>
            </>
          
        </CardBody>:''}
        <div className='app_subtn'>
          {isExplanation ? (
            <a>
              <Button
                className='add-new-btn add_btnctprev'
                color='primary'
                onClick={() => getNextQuestion()}
              >
                Next question
              </Button>
            </a>
          ) : (
            <a>
              <Button
                className='add-new-btn add_btnctprev'
                color='primary'
                disabled={selectedOption?.length ? false : true}
                onClick={() => setSubmitCliked(true)}
              >
                {selectedOption?.length ? 'Submit answer' : 'Next question'}
              </Button>
            </a>
          )}
        </div>
      </Col>
    </Row>
  );
};
