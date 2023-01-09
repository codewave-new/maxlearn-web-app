import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { CardBody, Input } from 'reactstrap';
import { CheckBox } from '@mui/icons-material';
import quesImage from '../../../assets/Images/question/Rectangle-2.png';
import { renderText } from '../../../utility/helper';
import { OptionWrapper } from './optionWrapper';
import { OptionWrapperPreview } from './optionWrapperPreview';

export const TrueOfFalse = ({
  questionInfo,
  attemptedQuestions,
  questionPerSession,
  setSubmitCliked,
  multi,
  setIsTrueOrFalse,
  isTrueOrFalse,
  isExplanation,
  getNextQuestion,
  statusVal,
  questionNo,
  totalQuestions,
  type,
  isExp
}) => {
  const options = [
    {
      label: 'TRUE',
      value: 'true',
    },
    {
      label: 'FALSE',
      value: 'false',
    },
  ];
  const handleSelect = (val) => {
    if (val == isTrueOrFalse) {
      setIsTrueOrFalse('');
    } else {
      setIsTrueOrFalse(val);
    }
  };

  return (
    <Row className='question_card d-flex  col-sm-12'>
      <Col className='col-sm-6 mt-4 mb-4 ml-2 question_detail '>
        <div className='p-1'>
          <div className=''>
            {type && type === 'cert'
              ? `Question - ${questionNo || 0} OF ${totalQuestions || 0}`
              : `Question - 
              ${isExplanation ? attemptedQuestions : attemptedQuestions + 1} OF 
              ${questionPerSession}`}
            {/* Question -{' '}
            {isExplanation ? attemptedQuestions - 1 : attemptedQuestions + 1} OF{' '}
            {questionPerSession} */}
          </div>
          <p className='mt-1'>TRUE OR FALSE QUESTION</p>
          <p className='mt-1 question-desc'>{renderText(questionInfo?.body)}</p>
          {/* <img className='quest_image mt-1' src={quesImage} /> */}
        </div>
      </Col>
      <Col className='col-sm-5 mt-4 mr-1 mb-4'>
        <div className='mt-2 quest_ans'>
          {isExplanation ? 'YOUR ANSWERS' : 'SELECT YOUR ANSWER'}{' '}
        </div>
        <CardBody className='mt-3 ml-2'>
          {isExplanation ? (
            <OptionWrapperPreview
              options={options}
              statusVal={statusVal}
              questionType={questionInfo?.questionType}
            />
          ) : (
            <OptionWrapper
              options={options}
              isTrueOrFalse={isTrueOrFalse}
              handleSelect={handleSelect}
            />
          )}
        </CardBody>
        {isExplanation&&isExp?
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
              {(questionPerSession-attemptedQuestions)==0?"Submit":'Next question'}
              </Button>
            </a>
          ) : (
            <a>
              <Button
  className={`add-new-btn add_btnctprev ${ isTrueOrFalse !== '' ?'': 'grey_bg'}
  `}                color='primary'
                disabled={isTrueOrFalse !== '' ? false : true}
                onClick={() => setSubmitCliked(true)}
              >
                {isTrueOrFalse !== '' ? 'Submit answer' : 'Next question'}
              </Button>
            </a>
          )}
        </div>
      </Col>
    </Row>
  );
};
