import React from 'react'
import { MultiSelect } from './multieSelect/multiSelect'
import { PutInOrder } from './putInOrder/putInOrder'
import { TrueOfFalse } from './trueOrFalse/trueOrFalse'

export const QuestionTypeWrapper = ({questionInfo,attemptedQuestions,
  questionPerSession,
  setSelectedOption,
  selectedOption,
  setSubmitCliked,
  setIsTrueOrFalse,
  isTrueOrFalse,
  isExplanation,
  getNextQuestion,
  statusVal
}) => {
  return (
    <div>
        {questionInfo?.questionType=="MULTIPLE_CHOICE"?
        <MultiSelect
        questionInfo={questionInfo}
        attemptedQuestions={attemptedQuestions}
        questionPerSession={questionPerSession}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        setSubmitCliked={setSubmitCliked}
        multi={true}
        isExplanation={isExplanation}
        getNextQuestion={getNextQuestion}
        statusVal={statusVal}
        />
        :questionInfo?.questionType=="SINGLE_CHOICE"?
        <MultiSelect
        questionInfo={questionInfo}
        attemptedQuestions={attemptedQuestions}
        questionPerSession={questionPerSession}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        setSubmitCliked={setSubmitCliked}
        multi={false}
        isExplanation={isExplanation}
        getNextQuestion={getNextQuestion}
        statusVal={statusVal}
        />:questionInfo?.questionType=="TRUE_OR_FALSE"?
        <TrueOfFalse
        questionInfo={questionInfo}
        attemptedQuestions={attemptedQuestions}
        questionPerSession={questionPerSession}
  setIsTrueOrFalse={setIsTrueOrFalse}
  isTrueOrFalse={isTrueOrFalse}
        setSubmitCliked={setSubmitCliked}
        multi={false}
        isExplanation={isExplanation}
        getNextQuestion={getNextQuestion}
        statusVal={statusVal}
        />:
        questionInfo?.questionType=="PUT_IN_ORDER"?
        <PutInOrder
        questionInfo={questionInfo}
        attemptedQuestions={attemptedQuestions}
        questionPerSession={questionPerSession}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        setSubmitCliked={setSubmitCliked}
        isExplanation={isExplanation}
        getNextQuestion={getNextQuestion}
        statusVal={statusVal}
        />
        :''}

{/* TRUE_OR_FALSE */}
    </div>
  )
}
