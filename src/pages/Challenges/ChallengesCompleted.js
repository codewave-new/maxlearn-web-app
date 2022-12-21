import React,{useState,useEffect} from 'react';
import {
  challengesCompletionBg,
  CloseButton,
  Gem,
  Points,
  PointsEarnedImage,
  Stars,
} from '../../assets';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ChallengesAccoridan from '../../components/Common/CustomAccordian/ChallengesAccoridan';
import TeamMembersDetail from '../../components/Questions/TeamMembersDetail';
import { Link, NavLink,useSearchParams,useParams,useNavigate,createSearchParams } from 'react-router-dom';
import { challengeIndividualScoreDetails, challengeSquadScoreDetails } from '../../services/challenges';
import { ResultIndividual } from '../../components/Challenges/result_individual';
import { ResultSquad } from '../../components/Challenges/result_squad';

const ChallengesCompleted = () => {
  const learnerId = '63738c435aaa893eecc9dbc1';
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  let challengeType=searchParams.get('challenge-type')
  const { id } = useParams();

  const [resultDetails, setResultDetails] = useState([]);
  const [submitCliked, setSubmitCliked] = useState(false);
  const [modalStatus, setModalStatus] = useState(true);
  const [individualResult, setIndividualResult] = useState({})



  
  useEffect(() => {
    getChallengeResultDetailss(id,challengeType)
  }, [id]);
  const getChallengeResultDetailss=async(id,type)=>{
  if(type=="INDIVIDUAL"){
    const res =await challengeIndividualScoreDetails(learnerId,id)
    setResultDetails(res?.data)
    if(res?.data?.learners?.length){
      let val=res?.data?.learners?.find(item=>item?._id==res?.data?.learner)
      setIndividualResult(val)  
    }
  }else if(type=="SQUAD"){
    const res =await challengeSquadScoreDetails(learnerId,id)
    setResultDetails(res?.data)
    if(res?.data?.challengeDetails?.squads?.length){
      let val=res?.data?.challengeDetails?.squads?.find(item=>item?._id==res?.data?.squad)
      setIndividualResult(val)  
    }
  }
}
  return (
    challengeType=="SQUAD"?
    <ResultSquad 
    setSubmitCliked={setSubmitCliked}
    submitCliked={submitCliked}
    individualResult={individualResult}
    resultDetails={resultDetails}
    member={individualResult?.learners?.find(item=>item?._id==resultDetails?.learner)}
    opponentSquads={resultDetails?.challengeDetails?.squads?.filter(item=>item?._id!==resultDetails?.squad)}
    />
  
    :
    <ResultIndividual
    setSubmitCliked={setSubmitCliked}
    submitCliked={submitCliked}
    individualResult={individualResult}
    resultDetails={resultDetails}
    opponents={resultDetails?.learners?.filter(item=>item?._id!==individualResult?._id)}
    />
  );
};

export default ChallengesCompleted;
