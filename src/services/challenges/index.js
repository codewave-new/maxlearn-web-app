import http from '../../api/api';


export const todaysChallengesListing = async (learnerId, pageNum) => {
  try {
    const response = await http.get(
      `/api/app/challenges/todays-challenges/${learnerId}?pageNum=${pageNum}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const upcomingChallenges = async (learnerId, pageNum) => {
  try {
    const response = await http.get(
      `/api/app/challenges/upcoming-challenges/${learnerId}?pageNum=${pageNum}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const challengesDetails = async (
  learnerId,
  challengeId,
  ChallengeType = 'INDIVIDUAL'
) => {
  try {
    const response = await http.get(
      `/api/app/challenges/challenge-details/${learnerId}/${challengeId}?challengeType=${ChallengeType}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const challengeStatus = async (challengeId) => {
  try {
    const response = await http.get(
      `/api/app/challenges/challenge-stats-now/${challengeId}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const startChallenge = async (payload) => {
  try {
    const response = await http.post(
      `/api/app/challenges/start-challenge`,
      payload
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const getChallengeExamQuestions = async (id) => {
  try {
    const response = await http.get(`/api/app/challenges/pick-question/${id}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const submitAnswerChallengeExam = async (payload) => {
  try {
    const response = await http.post(
      `/api/app/challenges/attempt-question`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const challengeSquadScoreDetails = async (learner, sessionId) => {
  try {
    const response = await http.get(
      `/api/app/challenges/score-details/${learner}/${sessionId}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const challengeIndividualScoreDetails = async (learner, sessionId) => {
  try {
    const response = await http.get(
      `/api/app/challenges/individual-score-details/${learner}/${sessionId}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};
