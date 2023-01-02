import http from '../../api/api';

export const CurrentandUpcommingChallenge = async (learnerId, query) => {
  console.log(query);
  try {
    const response = await http.get(
      `/api/app/challenges/current-and-upcoming-challenges/${learnerId}?`,
      {
        params: query,
      }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const TodayandUpcomingCertQuest = async (learnerId, query) => {
  console.log(query);
  try {
    const response = await http.get(`/api/app/certs/list/${learnerId}?`, {
      params: query,
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};
