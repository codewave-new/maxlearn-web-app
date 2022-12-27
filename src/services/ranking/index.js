import http from '../../api/api';

const learnerId = localStorage.getItem('userid');

export const IndividualsRankings = async (pageNum) => {
  try {
    const response = await http.get(
      `/api/app/leaderboard/individual-leaderboard/${learnerId}?pageNum=${pageNum}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const squadRankings = async (pageNum) => {
  try {
    const response = await http.get(
      `/api/app/leaderboard/squad-leaderboard/${learnerId}?pageNum=${pageNum}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};
