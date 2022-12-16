import React, { useState,useEffect } from 'react';
import { Link, NavLink,useSearchParams,useParams,useNavigate,createSearchParams } from 'react-router-dom';
import {
  HomeLogo,
  HomeNotificationLogo,
  MaxLogo,
  HomeSearchLogo,
  NavLearnLogo,
  NavToDoLogo,
  NavRangingLogo,
  HomeUserLogo,
  CloseButton,
} from '../../assets';
import { Points, ExamDetailBackground, CuteMonsters } from '../../assets';
import team from '../../assets/Images/usersquad/Team.jpg';
import oppentTeam from '../../assets/Images/usersquad/Group 3.png';
import '../../styles/questions/challengs-question.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';
import quesImage from '../../assets/Images/question/Rectangle-2.png';
import { Button, Card, Col, Row } from 'react-bootstrap';

import { CardBody, Input } from 'reactstrap';
import { CheckBox } from '@mui/icons-material';
import { getChallengeExamQuestions,submitAnswerChallengeExam } from '../../services/challenges';
import CustomNavbar from '../../components/questionTypes/navBar';
import { QuestionTypeWrapper } from '../../components/questionTypes/questionTypeWrapper';
import Modal from '../../components/Common/CustomModal/Modal';
import StepRangeSlider from 'react-step-range-slider'
import { WaitingLoader } from '../../components/loader/loader';
import ConfidenceSliderModal from '../../components/Common/CustomModal/ConfidenceSliderModal';

const range = [
  { value: '0', step: 1 }, // acts as min value
  { value: '50', step: 2 }, 
  { value: '100', step: 3 },
]
const ChallengesQuestions = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  let session=searchParams.get('session') // 'name'
  let master=searchParams.get('master') // 'name'
  // let attemptedQuestions=searchParams.get('attemptedQuestions') // 'name'
  let questionPerSession=searchParams.get('questionPerSession') // 'name'
  let timerVal=searchParams.get('timer') 
  let challengeType=searchParams.get('challenge-type')
  let points=searchParams.get('points')
  let name=searchParams.get('name')

  

  

  const { id } = useParams();
  const [questionsInfo, setQuestionsInfo] = useState();
  const [stat, setStat] = useState('');
  const [timeTakenToAnswer, setTimeTakenToAnswer] = useState(0);
  const [questionType, setQuestionType] = useState('');
  const [selectedOption, setSelectedOption] = useState([]);
  const [submitCliked, setSubmitCliked] = useState(false);
  const [modalStatus, setModalStatus] = useState(true);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isTrueOrFalse, setIsTrueOrFalse] = useState('');
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);
  const [time, setTime] = useState(10);
  const [totaltime, setTotalTime] = useState();
  const [confidence, setConfidence] = useState();
  const [intervalID, setIntervalID] = useState();


console.log('submitCliked',submitCliked)
  useEffect(() => {
    if(questionsInfo?._id&&timerVal=='false'&&(!submitCliked)){
      const timer = setInterval(() => {
        setTimeTakenToAnswer(timeTakenToAnswer+1);
    }, 1000);
    return () => clearInterval(timer); //This is important
    }
  })

  useEffect(() => {
    let interval = null;
    if(questionsInfo?._id&&timerVal=='true') {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalID(interval)
    }
  }, [questionsInfo,timerVal]);

  console.log('timetime',time,intervalID)


  useEffect(() => {
    if(submitCliked){
      console.log('intervalID',intervalID)
      clearInterval(intervalID,);
    }
  }, [intervalID,submitCliked]);


  useEffect(() => {
    getExamQuestions();
  }, [id]);


 const getExamQuestions=async()=>{
    try {
      const res = await getChallengeExamQuestions(id);
      if(res?.data?.sessionStatus=='COMPLETED'){
return navigate({
  pathname: `/to-do/challenge/score-details/${session}`,
  search: createSearchParams({
    'challenge-type':challengeType
  }).toString(),
})
} 
      setQuestionsInfo(res?.data?.questionInfo);
      setTimeTakenToAnswer(0)
      setQuestionType(res?.data?.questionInfo?.questionType);
      setTime(res?.data?.questionInfo?.timeToSolve);
      setTotalTime(res?.data?.questionInfo?.timeToSolve);
      setAttemptedQuestions(res?.data?.attemptedQuestions)     
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 410) {
        setStat('FINISHED');
      }
    }
  }
console.log('questionsInfo',questionsInfo)
  const activeClassName = 'active';
  const navActive = ({ isActive }) => (isActive ? activeClassName : undefined);
  const [openModal, setOpenModal] = useState(false);


  useEffect(()=>{
if(stat)getNextQuestion()
if(stat=='COMPLETED'){
  navigate({
    pathname: `/to-do/challenge/score-details/${session}`,
    search: createSearchParams({
      'challenge-type':challengeType
    }).toString(),
  })
}
},[stat])
  const getNextQuestion = () => {
    setTimeTakenToAnswer(0)
    setSubmitCliked(false)  
    setConfidence()
    setTotalTime()
    setTime()
    setIsTrueOrFalse('')
    setSelectedOption([]);
    setQuestionsInfo('')
    setIntervalID('')  
    if(stat === 'IN-PROGRESS'){
      // setstatus({});
      setStat('');
      getExamQuestions()
    }
  };
  useEffect(()=>{
if((timerVal=="true"&&time==0)){
  setSubmitCliked(true)
}
  },[time,timerVal])

  useEffect(()=>{
    if(confidence){
      attemptAnswer(confidence)
    }
      },[confidence])
    
  const attemptAnswer = async (confidence) => {
    setSubmitting(true)
        try {
        const params = {
          masterId: master,
          sessionId: session,
          question:questionsInfo._id,
          solutionIndex: selectedOption?.length?selectedOption:null,
          isTrueOrFalse:isTrueOrFalse==''?null:isTrueOrFalse,
          timeTaken:(timerVal=="true")?(totaltime-time):timeTakenToAnswer,
          confidence:confidence
        };
        if (questionType!== 'TRUE_OR_FALSE') delete params?.isTrueOrFalse
        if (questionType == 'TRUE_OR_FALSE') delete params?.solutionIndex
console.log('paramsparams',params)
        const res = await submitAnswerChallengeExam(params);
        setStat(res?.data?.sessionStatus);
        setAttemptedQuestions(res?.data?.attemptedQuestions)
        
      setSubmitting(false)
    } catch (error) {
      console.log(error);
      setSubmitting(false)
    }
  };
  return (
    <div className=''>
      <div className='question_bg'>
        <CustomNavbar time={(timerVal=="true")? 
        ((Math.floor(time / 60))+"min"+":"+(time - (Math.floor(time / 60)) * 60)+"sec"):((Math.floor(timeTakenToAnswer / 60))+"min"+":"+(timeTakenToAnswer - (Math.floor(timeTakenToAnswer / 60)) * 60)+"sec")}
        progress={Math.floor((attemptedQuestions/(parseInt(questionPerSession)))*100)}
        points={points}
        name={name}
        />
        <div>
          <QuestionTypeWrapper
          questionInfo={questionsInfo}
          attemptedQuestions={attemptedQuestions}
          questionPerSession={questionPerSession}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
          setSubmitCliked={setSubmitCliked}
          setIsTrueOrFalse={setIsTrueOrFalse}
          isTrueOrFalse={isTrueOrFalse}
          />
        </div>
        {submitCliked?
        <Modal open={modalStatus} close={()=>setModalStatus(false)}>
          <Card className='d-flex justify-content-center align-items-center card-dumm'>
          <Button className='add-new-btn add_btnctprev' color='primary'
      onClick={()=>setConfidence('low')} >
         {isSubmitting?<WaitingLoader/>:'Submit'}
      </Button>
          </Card>
        
 </Modal>
:''
}
</div>
    </div>
  );
};

export default ChallengesQuestions;
