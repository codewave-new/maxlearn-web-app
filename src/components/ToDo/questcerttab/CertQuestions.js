import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

import '../../../styles/questions/challengs-question.scss';
import CustomNavbar from '../../questionTypes/navBar';
import { QuestionTypeWrapper } from '../../questionTypes/questionTypeWrapper';
import ConfidenceSliderModal from '../../Common/CustomModal/ConfidenceSliderModal';
import {
  getCertExamQuestions,
  submitCertExamAns,
} from '../../../services/certs';

const CertQuestions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const session = searchParams.get('session'); // 'name'
  const timerVal = searchParams.get('timer');

  const [timeTakenToAnswer, setTimeTakenToAnswer] = useState(0);
  const [selectedOption, setSelectedOption] = useState([]);
  const [submitCliked, setSubmitCliked] = useState(false);
  const [setModalStatus] = useState(true);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isTrueOrFalse, setIsTrueOrFalse] = useState('');
  const [time, setTime] = useState();
  const [totaltime, setTotalTime] = useState();
  const [confidence, setConfidence] = useState();

  // uzhairkhan
  const [allQuestions, setAllQuestions] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState('');
  const [singleQuestionIndex, setSingleQuestionIndex] = useState(null);

  // my logic
  // get question based on index
  // on succes of submit increase index to get next question
  // when index === length -1 go to completion page

  const getExamQuestions = async (certID) => {
    try {
      const resp = await getCertExamQuestions(certID);
      if (resp.data.statusCode === 200) {
        const { questions } = resp.data.data.list;
        setAllQuestions(questions);
      }
      // return navigate({
      //   pathname: `/to-do/challenge/score-details/${session}`,
      //   search: createSearchParams({
      //     'challenge-type': challengeType,
      //   }).toString(),
    } catch (error) {
      console.log(error.response.status);
      // if (error.response.status === 410) {
      //   setStat('FINISHED');
      // }
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
        isTrueOrFalse: isTrueOrFalse == '' ? null : isTrueOrFalse,
        timeTaken: timerVal == 'true' ? totaltime - time : timeTakenToAnswer,
        confidenceLevel: ansConfidence,
      };
      const resp = await submitCertExamAns(params);
      if (resp.data.statusCode === 200) {
        setSubmitting(false);
        setSingleQuestion('');
        setConfidence('');
        setSelectedOption('');
        setSingleQuestionIndex((prevState) => prevState + 1);
        setSubmitCliked(false);
      }
      // setStat(res?.data?.sessionStatus);
      // setAttemptedQuestions(res?.data?.attemptedQuestions);
    } catch (error) {
      console.log(error.response);
      setSubmitting(false);
    }
  };

  useEffect(() => {
    // initial load set index to 0
    console.log('initial load');

    setSingleQuestionIndex(0);

    return () => {};
  }, []);

  useEffect(() => {
    if (singleQuestionIndex >= 0 && allQuestions.length) {
      setSingleQuestion(allQuestions[singleQuestionIndex]);
    }

    if (singleQuestionIndex === undefined) {
      navigate(`/to-do/challenge/score-details/${session}`, {
        state: { ...location.state },
      });
    }

    return () => {
      // setSingleQuestionIndex(null);
    };
  }, [singleQuestionIndex, allQuestions]);

  useEffect(() => {
    if (confidence) {
      attemptAnswer(confidence);
    }
  }, [confidence]);

  useEffect(() => {
    if (location && location.state) {
      if (location.state.certID) getExamQuestions(location.state.certID);
      console.log(
        'location.state.lastQuestionIdIndex',
        location.state.lastQuestionIdIndex
      );
      if (location.state.lastQuestionIdIndex >= 0) {
        setSingleQuestionIndex(location?.state?.lastQuestionIdIndex + 1);
      }
    }
  }, [location]);

  // useEffect(() => {
  //   return () => {};
  // }, [location.state.lastQuestionIdIndex]);

  console.log('singleQuestion', singleQuestion);
  console.log('singleQuestionIndex', singleQuestionIndex);

  // uzhairkhan

  // useEffect(() => {
  //   if (questionsInfo?._id && timerVal == 'false' && !submitCliked) {
  //     const timer = setInterval(() => {
  //       if (!submitCliked) setTimeTakenToAnswer(timeTakenToAnswer + 1);
  //     }, 1000);
  //     if (!incresingIntervalID) setIncresingTimerId(timer);
  //     return () => clearInterval(timer); //This is important
  //   }
  // });

  // useEffect(() => {
  //   let interval = null;
  //   if (questionsInfo?._id && timerVal == 'true' && !submitCliked) {
  //     interval = setInterval(() => {
  //       setTime((prevTime) => prevTime - 1);
  //     }, 1000);
  //     setIntervalID(interval);
  //   }
  // }, [questionsInfo, timerVal, submitCliked]);

  // useEffect(() => {
  //   if (submitCliked) {
  //     clearInterval(intervalID);
  //   }
  // }, [intervalID, submitCliked]);

  // useEffect(() => {
  //   if (submitCliked) {
  //     clearInterval(incresingIntervalID);
  //   }
  // }, [incresingIntervalID, submitCliked]);

  // useEffect(() => {
  //   if (stat) getNextQuestion();
  //   if (stat == 'COMPLETED') {
  //     navigate({
  //       pathname: `/to-do/challenge/score-details/${session}`,
  //       search: createSearchParams({
  //         'challenge-type': challengeType,
  //       }).toString(),
  //     });
  //   }
  // }, [stat]);

  // const getNextQuestion = () => {
  //   setTimeTakenToAnswer(0);
  //   setSubmitCliked(false);
  //   setConfidence();
  //   setTotalTime();
  //   setTime();
  //   setIsTrueOrFalse('');
  //   setSelectedOption([]);
  //   setQuestionsInfo('');
  //   setIntervalID('');
  //   setIncresingTimerId('');
  //   if (stat === 'IN-PROGRESS') {
  //     // setstatus({});
  //     setStat('');
  //     getExamQuestions();
  //   }
  // };
  // useEffect(() => {
  //   if (timerVal == 'true' && time == 0) {
  //     setSubmitCliked(true);
  //   }
  // }, [time, timerVal]);

  return (
    <div className=''>
      <div className='question_bg'>
        <CustomNavbar
          time={
            timerVal === 'true'
              ? `${Math.floor(time / 60)}min` +
                `:${time - Math.floor(time / 60) * 60}sec`
              : `${Math.floor(timeTakenToAnswer / 60)}min` +
                `:${
                  timeTakenToAnswer - Math.floor(timeTakenToAnswer / 60) * 60
                }sec`
          }
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
