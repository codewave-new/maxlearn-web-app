import React, { useEffect, useState } from 'react';
import CustomButton from '../Common/CustomButton/CustomButton';
import { Points, ExamDetailBackground, CuteMonsters } from '../../assets';
import MembersAvatar from '../Common/Avatar/MembersAvatar';
import QuestionCard, {
  DetailComponent,
  ThumNailComponent,
} from '../Common/QuestionCard.js/QuestionCard';
import TeamDetailModal from '../Common/CustomModal/TeamDetailModal';
import { NavLink ,useNavigate} from 'react-router-dom';
import { challengesDetails, challengeStatus,startChallenge,getChallengeExamQuestions} from '../../services/challenges';
import { useLocation, useParams,createSearchParams, useSearchParams} from 'react-router-dom';
import { useQuery } from '../../utility/helper';
import { WaitingLoader } from '../loader/loader';

const DetailCard = ({ start }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const loaction = useLocation();
  const query = useQuery(loaction.search);
  const [modalStatus, setModalStatus] = useState(false);
  const [challengeDescription, setChallengeDescription] = useState({});
  const [ongoingChallenge, setOngoingChallenge] = useState([]);
  const [examStart, setExamStart] = useState({});
  const [questionsInfo, setQuestionsInfo] = useState();
  const [stat, setStat] = useState('');
  const [timeTakenToAnswer, setTimeTakenToAnswer] = useState(0);
  const [questionType, setQuestionType] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('session')); // 'name'
  console.log(searchParams.get('master')); // 'name'
const [individualResult,setIndividualResult]=useState('')





  useEffect(() => {
    ChallengeDetail(id, query['challenge-type']);
  }, []);

  // useEffect(()=>{
  //   if(examStart?.challengeResult){
  //     getExamQuestions(examStart?.challengeResult)
  //   }

  // },[examStart])

  useEffect(()=>{
    if((examStart?.challengeResult)&&(individualResult!=='')){
      navigate({
        pathname: `/start-challenge-exam/${examStart?.challengeResult}`,
        search: createSearchParams({
          'session': `${examStart?.session}`,
          'master':`${examStart?.challengeResult}`,
          'attemptedQuestions':`${examStart?.attemptedQuestions}`,
          'questionPerSession':`${examStart?.questionPerSession}`,
          'timer':`${examStart?.isTimeSetPerQuestion}`,
          'challenge-type':query['challenge-type'],
          'name':query['challenge-type']=="SQUAD"?individualResult?.name:individualResult?.fullName,
          'points': query['challenge-type']=="SQUAD"?Math.floor(individualResult?.squadScore):Math.floor(individualResult?.pointsEarned) 
        }).toString(),
      })
    }
      },[examStart,individualResult])
    

  const ChallengeDetail = async (challengeId, challengeType) => {
    const response = await challengesDetails(challengeId, challengeType);
    console.log(response);
    if (response.statusCode === 200) {
      setChallengeDescription(response?.data);
      learnersStartedChallenge(challengeId);
    }
  };

  const learnersStartedChallenge = async (challengeId) => {
    const response = await challengeStatus(challengeId);
    console.log(response);
    if (response.statusCode === 200) {
      const liveExam = response?.data?.challengeStats?.map((learners) => {
        return learners?.learner;
      });
      setOngoingChallenge(liveExam);
    }
  };

const handleClick=async()=>{
//   attemptedQuestions
// : 
// 0
// challenge
// : 
// "638f27e33e6076482ed85bf5"
// challengeResult
// : 
// "638f29b33d478823d6734c7e"
// isExplanationSetPerQuestion
// : 
// true
// isTimeSetPerQuestion
// : 
// true
// learner
// : 
// "63738c435aaa893eecc9dbc1"
// questionPerSession
// : 
// 5
// season
// : 
// "638744a6b56a7acb2cf61846"
// session
// : 
// "63971a56d89b2cc7321ba46b"
// sessionPerDay
// : 
// 5
// squad
// : 
// "637f41661b7a54b494e625d5"
setLoading(true)
    try{
      const res= await startChallenge({challenge:id,learner:'63738c435aaa893eecc9dbc1'})
      setExamStart(res?.data)
      setLoading(false)
    }catch(er){
      console.log(er)
    }
  }

  useEffect(()=>{
    if(challengeDescription){
      if(query['challenge-type']=="SQUAD"){
        if(challengeDescription.challengeDetails?.squads?.length){
          let val=challengeDescription.challengeDetails?.squads?.find(item=>item?._id==challengeDescription?.squad)
          setIndividualResult(val)
        }
      }else  if(query['challenge-type']=="INDIVIDUAL"){
        let val=challengeDescription.challengeDetails?.learners?.find(item=>item?._id==challengeDescription?.learner)
        setIndividualResult(val)
      }
    }
  },[challengeDescription])
console.log('individualResult',individualResult)
  // stat === ''&&!questionsInfo?._id &&isLoading
  return (
    <div>
      <div className='detail__card-wrapper'>
        <div className='row'>
          <div className='col-6'>
            <div
              className='detail__card-wrapper-left'
              style={{
                backgroundImage: `url(${ExamDetailBackground.default})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              {/* <img src={ExamDetailBackground.default} /> */}
              <div className='team__info__image-des'>
                <div className='text-center'>
                  <div className='team__info--image team__info--our-team'>
                    <CuteMonsters.default />
                  </div>
                  <p className='team__info--name'>Roasters</p>
                  <div className='team__info__member-wrapper'>
                    <MembersAvatar
                      total={21}
                      max={4}
                      team={[1, 2, 3, 4, 5, 5, 5, 5]}
                    />
                  </div>
                  <div className='team__info__points-wrapper'>
                    <p className='mb-0 team__info__points-text'>
                      <img
                        className='team__info__points-img'
                        src={Points.default}
                      />
                      130 points
                    </p>
                  </div>
                </div>
                <div className='text-center'>
                  <div className='team__info--image team__info--opponent-team'>
                    <CuteMonsters.default />
                  </div>
                  <p className='team__info--name'>Roasters</p>

                  <div className='team__info__member-wrapper'>
                    <MembersAvatar
                      total={21}
                      max={4}
                      team={[1, 2, 3, 4, 5, 5, 5, 5]}
                    />
                  </div>
                  <div className='team__info__points-wrapper'>
                    <p className='mb-0 team__info__points-text'>
                      <img
                        className='team__info__points-img'
                        src={Points.default}
                      />
                      130 points
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-6 ${
              start ? 'detail__card-between' : 'detail__card-center'
            }`}
          >
            <div>
              <div className='detail__card__header'>
                <h4 className='detail__card__header-heading mb-0'>
                  Challenge in detail
                </h4>
                <p className='detail__card__header-duration mb-0'>
                  {/* 10 More days to go to */}
                </p>
              </div>

              <div className='detail__card__body'>
                <h3 className='detail__card__body-header'>
                  {challengeDescription?.challengeDetails?.name}
                </h3>
                {/* points */}
                <div className='detail__card__body-points'>
                  {/* {[1, 2, 2]?.map((value) => ( */}
                  <div className='wrapper'>
                    <span>
                      <img
                        className='detail__card__body-points-img'
                        src={Points.default}
                      />
                    </span>
                    <p className='detail__card__body-points-key'>
                      {challengeDescription?.challengeDetails?.description}
                    </p>
                  </div>
                  {/* ))} */}
                </div>
              </div>
            </div>

            {ongoingChallenge?.length > 0 && (
              <div className='partcipation'>
                <div className='partcipation__detail'>
                  <MembersAvatar
                    total={ongoingChallenge?.length}
                    max={3}
                    team={ongoingChallenge}
                  />
                  <p className='partcipation__detail-members mb-0'>
                    {ongoingChallenge?.length} people are taking this challenge
                    now!
                  </p>
                </div>
              </div>
            )}
            <div className='button'>
              {/* <NavLink to='/start-challenge-exam/:id'> */}
                <CustomButton
                  disabled={!start}
                  disabledText={'Yet to start'}
                  text={(stat === ''&&!questionsInfo?._id &&isLoading)?<WaitingLoader/>:'Start Challenge'}
                  handleClick={handleClick}
                  
                />
              {/* </NavLink> */}
            </div>
          </div>
        </div>
      </div>
      <TeamDetailModal
        modalStatus={modalStatus}
        handleClose={() => setModalStatus(false)}
      />
    </div>
    
  );
};

export default DetailCard;
