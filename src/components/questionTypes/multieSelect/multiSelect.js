import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { CardBody, Input } from 'reactstrap';
import { CheckBox } from '@mui/icons-material';
import quesImage from '../../../assets/Images/question/Rectangle-2.png';
import { renderText } from '../../../utility/helper';
import { OptionWrapper } from './optionWrapper';
import { OptionWrapperPreview } from './optionWrapperPreview';

export const MultiSelect = ({
  questionInfo,
  attemptedQuestions,
  questionPerSession,
  setSelectedOption,
  selectedOption,
  setSubmitCliked,
  multi,
  isExplanation,
  statusVal,
  getNextQuestion,
  questionNo,
  totalQuestions,
  type,
}) => {
  const handleSelect = (index) => {
    if (multi) {
      var newSelectedOptions =
        selectedOption?.length === 1
          ? selectedOption.includes(-1)
            ? []
            : selectedOption
          : selectedOption;
      if (selectedOption?.includes(index)) {
        newSelectedOptions = selectedOption.filter((ele) => ele !== index);
        setSelectedOption([...newSelectedOptions]);
      } else {
        let ress = [];
        newSelectedOptions.push(index);
        setSelectedOption([...newSelectedOptions]);
      }
    } else {
      {
        setSelectedOption([index]);
      }
    }
  };

  return (
    <Row className='question_card d-flex  col-sm-12'>
      <Col className='col-sm-6 mt-4 mb-4 ml-2 question_detail '>
        <div className='p-1'>
          <div className=''>
            {type && type === 'cert'
              ? `Question - ${questionNo || 0} OF ${totalQuestions || 0}`
              : `Question - ${
                  isExplanation ? attemptedQuestions : attemptedQuestions + 1
                } OF ${questionPerSession}`}
          </div>
          <p className='mt-1'>
            {multi ? 'MULTI SELECT QUESTION' : 'SINGLE SELECT QUESTION'}
          </p>
          <p className='mt-1'>{renderText(questionInfo?.body)}</p>
          {/* <img className='quest_image mt-1' src={quesImage} /> */}
        </div>
      </Col>
      <Col className='col-sm-5 mt-4 mr-1 mb-4'>
        <div className='mt-2 quest_ans'>
          {isExplanation ? 'YOUR ANSWERS' : 'SELECT YOUR ANSWER'}{' '}
        </div>
        <CardBody className='mt-3 ml-2'>
          {!isExplanation ? (
            <OptionWrapper
              options={questionInfo?.options}
              selectedOption={selectedOption}
              handleSelect={handleSelect}
            />
          ) : (
            <OptionWrapperPreview
              options={questionInfo?.options}
              selectedOption={selectedOption}
              handleSelect={handleSelect}
              statusVal={statusVal}
              questionType={questionInfo?.questionType}
            />
          )}
        </CardBody>
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
                disabled={
                  multi
                    ? selectedOption?.length >= 1
                      ? false
                      : true
                    : selectedOption?.length == 1
                    ? false
                    : true
                }
                onClick={() => setSubmitCliked(true)}
              >
                {multi
                  ? selectedOption?.length >= 1
                    ? 'Submit answer'
                    : 'Next question'
                  : selectedOption?.length == 1
                  ? 'Submit answer'
                  : 'Next question'}
              </Button>
            </a>
          )}
        </div>
        {isExplanation ? (
          <CardBody className='mt-3 ml-2 explanation-details'>
            <>
              <h2 className='mt-1'>Answer explanation in detail</h2>
              <p>{statusVal?.answerInfo?.feedback}</p>
            </>
          </CardBody>
        ) : (
          ''
        )}
      </Col>
    </Row>
  );
};
