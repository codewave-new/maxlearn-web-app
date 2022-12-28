import React, { memo, useCallback, useEffect, useState } from 'react';
import CustomButton from '../Common/CustomButton/CustomButton';
import { Points, ExamDetailBackground, StartCertExam } from '../../assets';
import MembersAvatar from '../Common/Avatar/MembersAvatar';
import TeamDetailModal from '../Common/CustomModal/TeamDetailModal';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  challengesDetails,
  challengeStatus,
  startChallenge,
  getChallengeExamQuestions,
} from '../../services/challenges';
import {
  useLocation,
  useParams,
  createSearchParams,
  useSearchParams,
} from 'react-router-dom';
import { useQuery } from '../../utility/helper';
import ChallengeDetailSlider from '../UI/Slider/ChallengeDetailSlider';
import { WaitingLoader, ButtonLoader } from '../loader/loader';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import StartCertExamComponent from '../ToDo/questcerttab/StartCertExamComponent';

const DetailCard = ({ start, state }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const loaction = useLocation();
  const query = useQuery(loaction.search);
  const authData = useSelector((state) => state.auth);
  const [modalStatus, setModalStatus] = useState(false);
  const [challengeDescription, setChallengeDescription] = useState({});
  const [ongoingChallenge, setOngoingChallenge] = useState([]);
  const [teamType, setTeamType] = useState();
  const [yourTeam, setYourTeam] = useState({});
  const [opponentTeam, setOpponentTeam] = useState([]);
  const [teamDetails, setTeamDetails] = useState({});
  const [examStart, setExamStart] = useState({});
  const [questionsInfo, setQuestionsInfo] = useState();
  const [stat, setStat] = useState('');
  const [timeTakenToAnswer, setTimeTakenToAnswer] = useState(0);
  const [questionType, setQuestionType] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [individualResult, setIndividualResult] = useState('');
  const [opponentResult, setOpponentResult] = useState('');

  useEffect(() => {
    ChallengeDetail(id, query['challenge-type']);
    if (query.exam_type === 'TODAYSTEST') {
      learnersStartedChallenge(id);
    }
  }, []);

  // useEffect(()=>{
  //   if(examStart?.challengeResult){
  //     getExamQuestions(examStart?.challengeResult)
  //   }

  // },[examStart])

  useEffect(() => {
    if (examStart?.challengeResult && individualResult !== '') {
      navigate({
        pathname: `/start-challenge-exam/${examStart?.challengeResult}`,
        search: createSearchParams({
          session: `${examStart?.session}`,
          master: `${examStart?.challengeResult}`,
          attemptedQuestions: `${examStart?.attemptedQuestions}`,
          questionPerSession: `${examStart?.questionPerSession}`,
          timer: `${examStart?.isTimeSetPerQuestion}`,
          'challenge-type': query['challenge-type'],
          name:
            query['challenge-type'] == 'SQUAD'
              ? individualResult?.name
              : individualResult?.fullName,
          points:
            query['challenge-type'] == 'SQUAD'
              ? Math.floor(individualResult?.squadScore)
              : Math.floor(individualResult?.pointsEarned),
          opponentName:
            query['challenge-type'] == 'SQUAD'
              ? opponentResult?.name
              : opponentResult?.fullName,
          opponentPoints:
            query['challenge-type'] == 'SQUAD'
              ? Math.floor(opponentResult?.squadScore)
              : Math.floor(opponentResult?.pointsEarned),
          logo1:
            query['challenge-type'] == 'SQUAD'
              ? individualResult?.imageUrl
              : individualResult?.profilePic,
          logo2:
            query['challenge-type'] == 'SQUAD'
              ? opponentResult?.imageUrl
              : opponentResult?.profilePic,
        }).toString(),
      });
    }
  }, [examStart, individualResult, opponentResult]);

  const ChallengeDetail = async (challengeId, challengeType) => {
    const response = await challengesDetails(
      authData.learnerId,
      challengeId,
      challengeType
    );
    if (response.statusCode === 200) {
      setChallengeDescription(response?.data);
      if (challengeType === 'SQUAD') {
        teamSegregation(
          response?.data?.challengeDetails?.squads,
          response?.data?.squad
        );
      } else {
        teamSegregation(
          response?.data?.challengeDetails?.learners,
          response?.data?.learner
        );
      }
    }
  };

  const teamSegregation = (teamArray, teamId) => {
    const ownTeamIndex = teamArray?.findIndex((team) => team?._id === teamId);
    setYourTeam(teamArray?.[ownTeamIndex]);
    const opponentTeamData = teamArray?.filter((team) => team?._id !== teamId);
    setOpponentTeam(opponentTeamData);
  };

  const learnersStartedChallenge = useCallback(async (challengeId) => {
    const response = await challengeStatus(challengeId);
    if (response.statusCode === 200) {
      const liveExam = response?.data?.challengeStats?.map((learners) => {
        return learners?.learner;
      });
      setOngoingChallenge(liveExam);
    }
  }, []);

  const teamDetailInfomation = (team, teamInfo) => {
    if (query['challenge-type'] === 'SQUAD') {
      setModalStatus(true);
      setTeamType(team);
      setTeamDetails(teamInfo);
    }
  };

  const handleClick = async () => {
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
    setLoading(true);

    const res = await startChallenge({
      challenge: id,
      learner: authData?.learnerId,
    });
    if (res.statusCode === 200) {
      setExamStart(res?.data);
      setLoading(false);
    } else if (res?.data?.statusCode === 409) {
      setLoading(false);
      toast.error('This Challenge is completed');
    }
  };

  useEffect(() => {
    if (challengeDescription) {
      if (query['challenge-type'] == 'SQUAD') {
        if (challengeDescription.challengeDetails?.squads?.length) {
          let val = challengeDescription.challengeDetails?.squads?.find(
            (item) => item?._id == challengeDescription?.squad
          );
          setIndividualResult(val);
        }
      } else if (query['challenge-type'] == 'INDIVIDUAL') {
        let val = challengeDescription.challengeDetails?.learners?.find(
          (item) => item?._id == challengeDescription?.learner
        );
        setIndividualResult(val);
        let opponentVal = challengeDescription.challengeDetails?.learners?.find(
          (item) => item?._id !== challengeDescription?.learner
        );
        setOpponentResult(opponentVal);
      }
    }
  }, [challengeDescription]);
  // stat === ''&&!questionsInfo?._id &&isLoading
  return (
    <div>
      <div className='detail__card-wrapper width-100'>
        {state && state.type === 'cert' ? (
          <StartCertExamComponent certInfo={state} />
        ) : (
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <div
                className='detail__card-wrapper-left'
                style={{
                  backgroundImage: `url(${ExamDetailBackground.default})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                <div className='team__info__image-des'>
                  <div className='text-center max-width'>
                    <div
                      className={
                        query['challenge-type'] === 'SQUAD'
                          ? 'team__info--image'
                          : 'team__info-individual'
                      }
                      onClick={() => {
                        teamDetailInfomation('our__team', yourTeam);
                      }}
                    >
                      <img
                        className={
                          query['challenge-type'] === 'SQUAD'
                            ? 'team__info-logo-image'
                            : 'team__info-individual-logo-image'
                        }
                        src={yourTeam?.imageUrl || yourTeam?.profilePic}
                        alt='no'
                      />
                    </div>
                    <p className='team__info--name'>
                      {yourTeam?.name || yourTeam?.fullName}
                    </p>
                    {query['challenge-type'] === 'SQUAD' && (
                      <div className='team__info__member-wrapper justify-content-center'>
                        <MembersAvatar
                          total={yourTeam?.learners?.length}
                          max={4}
                          team={yourTeam?.learners}
                          className='justify-content-center'
                        />
                      </div>
                    )}
                    <div className='team__info__points-wrapper'>
                      <p className='mb-0 team__info__points-text d-flex justify-content-center align-items-center'>
                        <img
                          className='team__info__points-img'
                          src={Points.default}
                        />
                        {yourTeam?.pointsEarned} points
                      </p>
                    </div>
                  </div>

                  {opponentTeam?.length > 0 && (
                    <ChallengeDetailSlider>
                      {opponentTeam?.map((opponent) => (
                        <div
                          className='opponent-wrapper-slick'
                          key={opponent?._id}
                        >
                          <div className='opponent_wrapper-slick d-flex flex-column justify-content-center align-items-center'>
                            {/* <div> */}
                            <div
                              className={
                                query['challenge-type'] === 'SQUAD'
                                  ? 'team__info--image'
                                  : 'team__info-individual'
                              }
                              onClick={() => {
                                teamDetailInfomation(
                                  'opponent__team',
                                  opponent
                                );
                              }}
                            >
                              <img
                                className={
                                  query['challenge-type'] === 'SQUAD'
                                    ? 'team__info-logo-image'
                                    : 'team__info-individual-logo-image'
                                }
                                src={opponent?.imageUrl || opponent?.profilePic}
                                alt='no'
                              />
                            </div>
                            <p className='team__info--name text-center'>
                              {opponent?.name || opponent?.fullName}
                            </p>
                            {/* </div> */}

                            {query['challenge-type'] === 'SQUAD' && (
                              <div className='team__info__member-wrapper'>
                                <MembersAvatar
                                  total={opponent?.learners?.length}
                                  max={4}
                                  team={opponent?.learners}
                                />
                              </div>
                            )}
                            <div
                              className={
                                query['challenge-type'] === 'SQUAD'
                                  ? 'team__info__points-wrapper'
                                  : ''
                              }
                            >
                              <p className='mb-0 team__info__points-text text-center justify-content-center d-flex align-items-center'>
                                <img
                                  className='team__info__points-img'
                                  src={Points.default}
                                />
                                {opponent?.pointsEarned} points
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </ChallengeDetailSlider>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`col-12  col-lg-6 ${
                query.exam_type === 'TODAYSTEST'
                  ? 'detail__card-between'
                  : 'detail__card-center'
              }`}
            >
              <div>
                <div className='detail__card__header mt-lg-0 mt-sm-5'>
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
                      {ongoingChallenge?.length} people are taking this
                      challenge now!
                    </p>
                  </div>
                </div>
              )}
              <div className='button'>
                {/* <NavLink to='/start-challenge-exam/:id'> */}
                <CustomButton
                  disabled={query.exam_type === 'TODAYSTEST' ? false : true}
                  disabledText={'Yet to start'}
                  text={
                    stat === '' && !questionsInfo?._id && isLoading ? (
                      <ButtonLoader />
                    ) : (
                      'Start Challenge'
                    )
                  }
                  handleClick={handleClick}
                />
                {/* </NavLink> */}
              </div>
            </div>
          </div>
        )}
      </div>
      {query['challenge-type'] === 'SQUAD' ? (
        <TeamDetailModal
          modalStatus={modalStatus}
          handleClose={() => setModalStatus(false)}
          teamBgColor={teamType}
          teamDetails={teamDetails}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default memo(DetailCard);
