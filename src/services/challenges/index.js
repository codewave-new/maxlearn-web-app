import http from '../../api/api';

const learnerId = '63738c435aaa893eecc9dbc1';

export const todaysChallengesListing = async () => {
  try {
    const response = await http.get(
      `/api/app/challenges/todays-challenges/${learnerId}?pageNum=1`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const upcomingChallenges = async (pageNum) => {
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
