import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';

import '../../../styles/questions/challengs-question.scss';
import CustomNavbar from '../../questionTypes/navBar';
import { QuestionTypeWrapper } from '../../questionTypes/questionTypeWrapper';
import ConfidenceSliderModal from '../../Common/CustomModal/ConfidenceSliderModal';
import {
  finishCertTest,
  getCertExamQuestions,
  submitCertExamAns,
} from '../../../services/certs';

const CertQuestions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState([]);
  const [submitCliked, setSubmitCliked] = useState(false);
  const [setModalStatus] = useState(true);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isTrueOrFalse, setIsTrueOrFalse] = useState('');
  const [confidence, setConfidence] = useState();

  // uzhairkhan
  const [allQuestions, setAllQuestions] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState('');
  const [singleQuestionIndex, setSingleQuestionIndex] = useState(null);
  const [timeToSolveQuestion, setTimeToSolveQuestion] = useState(0);
  const [remTimeToSolveQuestion, setRemTimeToSolveQuestion] = useState(0);
  const [timeBoundVal, setTimeBound] = useState(false);
  const [timerVal, setTimerVal] = useState('');

  const getExamQuestions = async (certID) => {
    try {
      const resp = await getCertExamQuestions(certID);
      if (resp.data.statusCode === 200) {
        const { questions } = resp.data.data.list;
        const { timeBound } = resp.data.data.list;
        setAllQuestions(questions);
        setTimeBound(timeBound);
      }
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const finishTest = async (resultID) => {
    try {
      const resp = await finishCertTest({
        resultId: resultID,
        dateOfSubmission: moment().format('MM/DD/YYYY'),
      });
      if (resp.data.statusCode === 200) {
        navigate('/to-do/cert/score', {
          state: { ...location.state },
        });
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  const attemptAnswer = async (ansConfidence) => {
    setSubmitting(true);
    try {
      const params = {
        resultId: location?.state?.resultId ?? '',
        // eslint-disable-next-line no-underscore-dangle
        question: singleQuestion._id,
        solutionIndex: selectedOption?.length ? selectedOption : null,
        isTrueOrFalse: isTrueOrFalse === '' ? null : isTrueOrFalse,
        timeTaken: timeBoundVal
          ? timeToSolveQuestion - remTimeToSolveQuestion
          : remTimeToSolveQuestion || 0,
        confidenceLevel: ansConfidence,
      };
      const resp = await submitCertExamAns(params);
      if (resp.data.statusCode === 200) {
        if (singleQuestionIndex === allQuestions.length - 1) {
          finishTest(location.state.resultId);
        } else {
          setSubmitting(false);
          setSingleQuestion('');
          setConfidence('');
          setSelectedOption('');
          setSingleQuestionIndex((prevState) => prevState + 1);
          setSubmitCliked(false);
        }
      }
    } catch (error) {
      console.log(error.response);
      setSubmitting(false);
    }
  };

  useEffect(() => {
    // initial load set index to 0
    setSingleQuestionIndex(0);

    return () => {};
  }, []);

  useEffect(() => {
    if (location && location.state) {
      if (
        location.state.lastQuestionIdIndex >= 0 &&
        location.state.lastQuestionIdIndex < allQuestions.length - 1
      ) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        setSingleQuestionIndex(location?.state?.lastQuestionIdIndex + 1);
      }

      if (location.state.lastQuestionIdIndex === allQuestions.length - 1) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        setSingleQuestionIndex(location?.state?.lastQuestionIdIndex);
      }

      // if (location.state.lastQuestionIdIndex > allQuestions.length - 1) {
      //   // eslint-disable-next-line no-unsafe-optional-chaining
      //   finishTest(location?.state?.resultId);
      // }

      if (location.state.lastQuestionIdIndex === -1) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        setSingleQuestionIndex(0);
      }
    }
  }, [location, allQuestions]);

  useEffect(() => {
    if (location && location.state) {
      if (location.state.certID) getExamQuestions(location.state.certID);
    }
  }, [location]);

  useEffect(() => {
    if (singleQuestionIndex >= 0 && allQuestions.length) {
      setSingleQuestion(allQuestions[singleQuestionIndex]);
      const { timeToSolve } = allQuestions[singleQuestionIndex];
      if (timeToSolve && timeBoundVal) {
        setTimeToSolveQuestion(timeToSolve);
        setRemTimeToSolveQuestion(timeToSolve);
      }
    }

    return () => {};
  }, [singleQuestionIndex, allQuestions]);

  useEffect(() => {
    if (confidence) {
      attemptAnswer(confidence);
    }
  }, [confidence]);

  // timer code

  useEffect(() => {
    let timer = '';

    if (timeBoundVal) {
      timer = setInterval(() => {
        const mins = Math.floor(remTimeToSolveQuestion / 60);
        const sec =
          remTimeToSolveQuestion - Math.floor(remTimeToSolveQuestion / 60) * 60;

        setTimerVal(`${mins} min : ${sec} sec`);
        setRemTimeToSolveQuestion((prevState) => prevState - 1);
      }, 1000);
      if (remTimeToSolveQuestion < 0) clearInterval(timer);
    }

    if (!timeBoundVal) {
      timer = setInterval(() => {
        const mins = Math.floor(remTimeToSolveQuestion / 60);
        const sec =
          remTimeToSolveQuestion - Math.floor(remTimeToSolveQuestion / 60) * 60;

        setTimerVal(`${mins} min : ${sec} sec`);
        setRemTimeToSolveQuestion((prevState) => prevState + 1);
      }, 1000);
      // if (remTimeToSolveQuestion < 0) clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [remTimeToSolveQuestion, timeBoundVal]);
  // timer code

  // uzhairkhan

  return (
    <div className=''>
      <div className='question_bg'>
        <CustomNavbar
          time={timerVal || '0 min : 0 sec'}
          progress={Math.floor(
            (singleQuestionIndex / parseInt(allQuestions.length, 10)) * 100
          )}
          // points={points}
          name={location?.state?.userName ?? ''}
        />
        <div>
          <QuestionTypeWrapper
            questionInfo={singleQuestion}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            setSubmitCliked={setSubmitCliked}
            setIsTrueOrFalse={setIsTrueOrFalse}
            isTrueOrFalse={isTrueOrFalse}
          />
        </div>
        {submitCliked ? (
          <ConfidenceSliderModal
            modalStatus={submitCliked}
            handleClose={() => setModalStatus(false)}
            setConfidence={setConfidence}
            setSubmitCliked={setSubmitCliked}
            isSubmitting={isSubmitting}
            name={location?.state?.userName ?? ''}
            // setIncresingTimerId={setIncresingTimerId}
            // setIntervalID={setIntervalID}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default CertQuestions;
