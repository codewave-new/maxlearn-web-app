import React, { memo, useCallback, useEffect, useState } from 'react';
import CustomButton from '../Common/CustomButton/CustomButton';
import { Points, ExamDetailBackground } from '../../assets';
import MembersAvatar from '../Common/Avatar/MembersAvatar';
import TeamDetailModal from '../Common/CustomModal/TeamDetailModal';
import { NavLink } from 'react-router-dom';
import { challengesDetails, challengeStatus } from '../../services/challenges';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '../../utility/helper';
import ChallengeDetailSlider from '../UI/Slider/ChallengeDetailSlider';

const DetailCard = () => {
  const { id } = useParams();
  const loaction = useLocation();
  const query = useQuery(loaction.search);
  const [modalStatus, setModalStatus] = useState(false);
  const [challengeDescription, setChallengeDescription] = useState({});
  const [ongoingChallenge, setOngoingChallenge] = useState([]);
  const [teamType, setTeamType] = useState();
  const [yourTeam, setYourTeam] = useState({});
  const [opponentTeam, setOpponentTeam] = useState([]);
  const [teamDetails, setTeamDetails] = useState({});

  useEffect(() => {
    ChallengeDetail(id, query['challenge-type']);
    if (query.exam_type === 'TODAYSTEST') {
      learnersStartedChallenge(id);
    }
  }, []);

  const ChallengeDetail = useCallback(async (challengeId, challengeType) => {
    const response = await challengesDetails(challengeId, challengeType);
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
  }, []);

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
    } else {
      console.log(response);
    }
  }, []);

  const teamDetailInfomation = (team, teamInfo) => {
    if (query['challenge-type'] === 'SQUAD') {
      setModalStatus(true);
      setTeamType(team);
      setTeamDetails(teamInfo);
    }
  };

  return (
    <div>
      <div className='detail__card-wrapper width-100'>
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
                              teamDetailInfomation('opponent__team', opponent);
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
              query.exam_type === 'TODAYSTEST' ? 'detail__card-between' : 'detail__card-center'
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
                    {ongoingChallenge?.length} people are taking this challenge
                    now!
                  </p>
                </div>
              </div>
            )}
            <div className='button'>
              <NavLink to='/challenge_question/:id'>
                <CustomButton
                  disabled={query.exam_type === 'TODAYSTEST' ? false : true}
                  disabledText={'Yet to start'}
                  text={'Start Challenge'}
                />
              </NavLink>
            </div>
          </div>
        </div>
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
