import http from '../../api/api';

export const IndividualsRankings = async (learnerId, pageNum) => {
  try {
    const response = await http.get(
      `/api/app/leaderboard/individual-leaderboard/${learnerId}?pageNum=${pageNum}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const squadRankings = async (learnerId, pageNum) => {
  try {
    const response = await http.get(
      `/api/app/leaderboard/squad-leaderboard/${learnerId}?pageNum=${pageNum}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};
